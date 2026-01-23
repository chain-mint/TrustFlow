import { useReadContract, useAccount } from "wagmi";
import { CHARITY_TRACKER_ADDRESS, CHARITY_TRACKER_ABI } from "@/lib/contract";
import { type VoteStatus } from "@/types/contract";
import { formatPercentage } from "@/lib/utils";
import { type Address } from "viem";

/**
 * Type guard to check if data is a tuple/array
 */
function isTuple(data: unknown): data is unknown[] {
  return Array.isArray(data);
}

/**
 * Safely transform contract vote status data to VoteStatus type
 */
function transformVoteStatusData(data: unknown): VoteStatus | null {
  if (!isTuple(data) || data.length < 3) {
    return null;
  }

  return {
    voteWeight: data[0] as bigint,
    snapshot: data[1] as bigint,
    canRelease: data[2] as boolean,
  };
}

/**
 * Hook to fetch milestone voting status
 */
export function useMilestoneVoteStatus(
  projectId: number | bigint,
  milestoneId: number | bigint
) {
  const { data, isLoading, isError, error } = useReadContract({
    address: CHARITY_TRACKER_ADDRESS,
    abi: CHARITY_TRACKER_ABI,
    functionName: "getMilestoneVoteStatus",
    args: [BigInt(projectId), BigInt(milestoneId)],
    query: {
      enabled: projectId > 0 && milestoneId > 0,
    },
  });

  // Transform the contract response to VoteStatus type
  const voteStatus: VoteStatus | undefined = data
    ? transformVoteStatusData(data) ?? undefined
    : undefined;

  // Calculate quorum percentage (voteWeight / snapshot * 100)
  const quorumPercentage =
    voteStatus && voteStatus.snapshot > BigInt(0)
      ? formatPercentage(
          Number(voteStatus.voteWeight),
          Number(voteStatus.snapshot)
        )
      : "0.0";

  // Check if quorum is met (>50%)
  const quorumMet =
    voteStatus &&
    voteStatus.snapshot > BigInt(0) &&
    voteStatus.voteWeight > voteStatus.snapshot / BigInt(2);

  return {
    voteStatus,
    quorumPercentage,
    quorumMet,
    isLoading,
    isError,
    error,
  };
}

/**
 * Hook to check if a donor has voted on a milestone
 */
export function useHasVoted(
  projectId: number | bigint,
  milestoneId: number | bigint,
  donorAddress: Address | undefined
) {
  const { data, isLoading, isError, error } = useReadContract({
    address: CHARITY_TRACKER_ADDRESS,
    abi: CHARITY_TRACKER_ABI,
    functionName: "hasDonorVoted",
    args: [BigInt(projectId), BigInt(milestoneId), donorAddress!],
    query: {
      enabled: projectId > 0 && milestoneId >= 0 && !!donorAddress,
    },
  });

  // Return boolean (default to false if not voted or error)
  const hasVoted: boolean = (data as boolean | undefined) ?? false;

  return {
    hasVoted,
    isLoading,
    isError,
    error,
  };
}

