import { defineChain } from "viem";

export const liskSepolia = /*#__PURE__*/ defineChain({
  id: 4202,
  network: "lisk-sepolia",
  name: "Lisk Sepolia Testnet",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.sepolia-api.lisk.com"],
    },
    public: {
      http: ["https://rpc.sepolia-api.lisk.com"],
    },
  },
  blockExplorers: {
    blockscout: {
      name: "Blockscout",
      url: "https://sepolia-blockscout.lisk.com",
    },
    default: {
      name: "Blockscout",
      url: "https://sepolia-blockscout.lisk.com",
    },
  },
  testnet: true,
});
