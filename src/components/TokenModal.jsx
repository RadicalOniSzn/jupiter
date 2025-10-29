import React, { useState } from "react";
import { SearchIcon, XIcon } from "lucide-react";

const popularTokens = [
  {
    symbol: "SOL",
    name: "Solana",
    icon: "S",
    color: "white",
    balance: "0.0101",
    src: "./solana.jpg",
  },
  {
    symbol: "BONK",
    name: "Bonk",
    icon: "B",
    color: "orange",
    balance: "1,172,678.62",
    src: "./bonk.jpg"
  },
  {
    symbol: "JUP",
    name: "Jupiter",
    icon: "J",
    color: "green",
    balance: "10.45",
    src: "./jupiter_logo.webp"
  },
  {
    symbol: "USDC",
    name: "USD Coin",
    icon: "U",
    color: "blue",
    balance: "25.00",
    src: "./usdc.jpg"
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    icon: "E",
    color: "purple",
    balance: "0.005",
    src: "./ethereum.jpg"
  },
  {
    symbol: "BTC",
    name: "Bitcoin",
    icon: "B",
    color: "yellow",
    balance: "0.0001",
    src: "./bitcoin.jpg"
  },
];

export const TokenModal = ({ onClose, tokenType, onSelectToken }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredTokens = popularTokens.filter(
    (token) =>
      token.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      token.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs bg-black/20">
      <div className="bg-[#1c2230] rounded-2xl w-full max-w-md max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          <h3 className="font-medium">Select a token</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <XIcon size={20} />
          </button>
        </div>

        {/* Search */}
        <div className="p-4">
          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <SearchIcon size={16} className="text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search by token name or address"
              className="w-full bg-[#131722] rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#76E268]"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>

          {/* Popular tokens */}
          <div className="mb-4">
            <h4 className="text-sm text-gray-400 mb-2">Popular tokens</h4>
            <div className="flex flex-wrap gap-2">
              {popularTokens.slice(0, 4).map((token) => (
                <button
                  key={token.symbol}
                  className="flex items-center gap-2 bg-[#131722] rounded-lg px-3 py-1.5 text-sm hover:bg-[#252e40]"
                  onClick={() => {
                    if (onSelectToken) onSelectToken(token.symbol);
                    onClose();
                  }}
                >
                  {token.src ? (
                    <img
                      src={token.src}
                      alt={token.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center text-xs"
                      style={{
                        backgroundColor:
                          token.color === "white"
                            ? "white"
                            : token.color === "orange"
                            ? "#f97316"
                            : token.color === "green"
                            ? "#10b981"
                            : token.color === "blue"
                            ? "#3b82f6"
                            : token.color === "purple"
                            ? "#8b5cf6"
                            : "#eab308",
                        color: token.color === "white" ? "black" : "white",
                      }}
                    >
                      {token.icon}
                    </div>
                  )}
                  <span>{token.symbol}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Token list */}
          <div className="max-h-[40vh] overflow-y-auto">
            {filteredTokens.length > 0 ? (
              filteredTokens.map((token) => (
                <div
                  key={token.symbol}
                  className="flex items-center justify-between p-3 hover:bg-[#252e40] rounded-lg cursor-pointer"
                  onClick={() => {
                    if (onSelectToken) onSelectToken(token.symbol);
                    onClose();
                  }}
                >
                  <div className="flex items-center gap-3">

                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                      style={{
                        backgroundColor:
                          token.color === "white"
                            ? "white"
                            : token.color === "orange"
                            ? "#f97316"
                            : token.color === "green"
                            ? "#10b981"
                            : token.color === "blue"
                            ? "#3b82f6"
                            : token.color === "purple"
                            ? "#8b5cf6"
                            : "#eab308",
                        color: token.color === "white" ? "black" : "white",
                      }}
                    >
                      {token.icon}
                    </div>
                    <div>
                      <div className="font-medium">{token.symbol}</div>
                      <div className="text-sm text-gray-400">{token.name}</div>
                    </div>
                  </div>
                  <div className="text-right text-sm">{token.balance}</div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-400">
                No tokens found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
