import { type Address } from "viem";

/**
 * Mock implementations of Wagmi hooks for testing
 * These can be overridden in individual tests
 */

// Default mock account
const defaultAccount: { address: Address; isConnected: boolean } = {
  address: "0x1234567890123456789012345678901234567890" as Address,
  isConnected: false,
};

// Default mock chain
const defaultChain = {
  id: 84532, // Base Sepolia
  name: "Base Sepolia",
  network: "base-sepolia",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://sepolia.base.org"],
    },
  },
};

// Mock implementations
export const useAccount = jest.fn(() => ({
  address: defaultAccount.address,
  isConnected: defaultAccount.isConnected,
  chain: defaultChain,
}));

export const useConnect = jest.fn(() => ({
  connect: jest.fn(),
  connectors: [],
  isPending: false,
  error: null,
}));

export const useDisconnect = jest.fn(() => ({
  disconnect: jest.fn(),
}));

export const useSwitchChain = jest.fn(() => ({
  switchChain: jest.fn(),
  isPending: false,
  error: null,
}));

export const useChainId = jest.fn(() => 84532);

export const useBalance = jest.fn(() => ({
  data: {
    value: BigInt("1000000000000000000"), // 1 ETH
    decimals: 18,
    symbol: "ETH",
    formatted: "1.0",
  },
  isLoading: false,
  isError: false,
  error: null,
}));

export const useReadContract = jest.fn(() => ({
  data: null,
  isLoading: false,
  isError: false,
  error: null,
  refetch: jest.fn(),
}));

export const useReadContracts = jest.fn(() => ({
  data: [],
  isLoading: false,
  isError: false,
  error: null,
}));

export const useWriteContract = jest.fn(() => ({
  writeContract: jest.fn(),
  data: undefined,
  isPending: false,
  error: null,
}));

export const useWaitForTransactionReceipt = jest.fn(() => ({
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: null,
  data: {
    transactionHash: "0x1234567890123456789012345678901234567890123456789012345678901234",
    blockNumber: BigInt(1),
    blockHash: "0x1234567890123456789012345678901234567890123456789012345678901234",
    transactionIndex: 0,
    from: defaultAccount.address,
    to: "0x0000000000000000000000000000000000000000",
    cumulativeGasUsed: BigInt(21000),
    gasUsed: BigInt(21000),
    contractAddress: null,
    logs: [],
    status: "success",
    logsBloom: "0x" + "0".repeat(512),
  },
}));
