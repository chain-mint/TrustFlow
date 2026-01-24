# Transparent Charity Tracker (TCT)

A transparent blockchain-based charity tracking platform built on Base. Track donations, milestones, and fund releases with full transparency on-chain.

## 🎯 Project Overview

Transparent Charity Tracker is a decentralized application (dApp) that enables transparent charity project management on the blockchain. NGOs can create projects with milestones, donors can contribute ETH or ERC20 tokens, and milestone fund releases require donor voting approval.

### Key Features

- **Transparent Project Management**: All projects, donations, and milestones are recorded on-chain
- **Multi-Token Support**: Donate with ETH or ERC20 tokens (e.g., USDC)
- **Milestone-Based Funding**: Projects are broken down into milestones that require donor approval
- **Voting System**: Donors can vote on milestone fund releases based on their contribution weight
- **NGO Dashboard**: Verified NGOs can manage their projects and release funds
- **Real-Time Updates**: React Query for efficient data fetching and caching

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- A Web3 wallet (MetaMask, WalletConnect, etc.)
- Base Sepolia testnet ETH (for testing)
- Git

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tct
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and fill in your configuration:
- `NEXT_PUBLIC_APP_URL`: Your application URL
- `NEXT_PUBLIC_CHAIN_ID`: Chain ID (84532 for Base Sepolia, 8453 for Base Mainnet)
- `NEXT_PUBLIC_RPC_URL`: RPC endpoint URL
- `NEXT_PUBLIC_CHARITY_TRACKER_ADDRESS`: Deployed contract address
- `NEXT_PUBLIC_USDC_ADDRESS`: USDC token address (if using USDC)

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



<!-- CONTRACT ADDRESS -->
TRACKER_ADDRESS=0x46c17579afF1635b9d983603ED0b4A1c0823bF3d
NGO_ADDRESS=0xc7b93b317634c08D14D806057F9B4C0EB9E62059