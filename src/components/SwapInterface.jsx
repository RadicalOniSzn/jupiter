import React, { useState } from "react";
import { TokenSelector } from "./TokenSelector";
import { HiArrowsUpDown } from "react-icons/hi2";
import { BsStars } from "react-icons/bs";
import { RiEqualizerLine } from "react-icons/ri";
import {
  EyeIcon,
  InfoIcon,
} from "lucide-react";
import TriggerInterface from "./TriggerInterface";
import RecurringInterface from "./RecurringInterface";
import { TokenModal } from "./TokenModal";

export default function SwapInterface() {
  const [activeTab, setActiveTab] = useState("market");
  const [sellAmount, setSellAmount] = useState("");
  const [buyAmount, setBuyAmount] = useState("");
  const [showTokenModal, setShowTokenModal] = useState(false);
  const [selectedToken, setSelectedToken] = useState(null);
  const [showChart, setShowChart] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSellAmountChange = (e) => {
    const value = e.target.value;
    setSellAmount(value);

    if (value && !isNaN(value)) {
      setBuyAmount((parseFloat(value) * 19000).toFixed(2));
    } else {
      setBuyAmount("");
    }
  };

  const handleHalfClick = () => {
    setSellAmount("0.005");
    setBuyAmount("95.00");
  };

  const handleMaxClick = () => {
    setSellAmount("0.010147684");
    setBuyAmount("192.80");
  };

  const openTokenModal = (type) => {
    setSelectedToken(type);
    setShowTokenModal(true);
  };

  const toggleChart = () => {
    setShowChart(!showChart);
  };

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  return (
    <>
      <div className="bg-[#0e1116] rounded-3xl border border-gray-800  overflow-hidden">
        {/* Tab navigation */}
        <div className="flex  px-[12px] text-sm border border-gray-800 ">
          <button
            className={`flex-1 my-[12px] py-3 px-7 cursor-pointer text-center rounded-full hover:bg-[#c9f283]/10 ${
              activeTab === "market"
                ? "bg-[#c9f283]/20 backdrop-blur-sm text-[#c9f283] "
                : "text-gray-400 hover:text-white"
            }`}
            onClick={() => handleTabChange("market")}
          >
            Market
          </button>
          <button
            className={`flex-1 my-[12px] py-3 px-7 cursor-pointer rounded-full text-center hover:bg-[#c9f283]/10 ${
              activeTab === "trigger"
                ? "bg-[#c9f283]/20 backdrop-blur-sm text-[#c9f283]"
                : "text-gray-400 hover:text-white"
            }`}
            onClick={() => handleTabChange("trigger")}
          >
            Trigger
          </button>
          <button
            className={`flex-1 my-[12px] py-3 px-7 cursor-pointer rounded-full text-center hover:bg-[#c9f283]/10 ${
              activeTab === "recurring"
                ? "bg-[#c9f283]/20 backdrop-blur-sm text-[#c9f283]"
                : "text-gray-400 hover:text-white"
            }`}
            onClick={() => handleTabChange("recurring")}
          >
            Recurring
          </button>
        </div>

        {activeTab === "market" && (
          <>
            {/* Ultra V2 badge */}
            <div className="p-4">
              <div className="flex items-center gap-1 bg-blend-color border border-gray-800 rounded-full px-3 py-1.5 w-fit cursor-pointer hover:bg-[#252e40]">
                <div className="w-5 h-5 flex items-center justify-center cursor-pointer">
                  <span className="text-[#c9f283] text-lg"><BsStars size={12} /></span>
                </div>
                <span className="text-xs cursor-pointer">Ultra V3</span>
                <span className=" bg-[#c9f283] text-xs px-0.5 rounded text-black">
                  New
                </span>
                <button className="text-gray-400 cursor-pointer">
                  <RiEqualizerLine  size={14} />
                </button>
              </div>
            </div>

            {/* Selling section */}
            <div className="p-4 bg-[#131722] mx-3 rounded-2xl  border-b border-gray-800">
              <div className="flex justify-between items-center  mb-2">
                <span className="text-xs">Selling</span>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span>0.010147684 SOL</span>
                  <button
                    className="bg-gray-700/40 rounded text-xs  px-1.5 py-1 cursor-pointer hover:bg-gray-600"
                    onClick={handleHalfClick}
                  >
                    HALF
                  </button>
                  <button
                    className="bg-gray-700/40 rounded px-1.5 py-1 cursor-pointer hover:bg-gray-600"
                    onClick={handleMaxClick}
                  >
                    MAX
                  </button>
                </div>
              </div>
              <div className=" rounded-lg pt-5 ">
                <div className="flex justify-between ">
                  <div onClick={() => openTokenModal("sell")}>
                    <TokenSelector token="SOL" className="cursor-pointer" />
                  </div>
                  <div className="text-right ">

                    <input
                      type="text"
                      value={sellAmount}
                      onChange={handleSellAmountChange}
                      placeholder="0.00"
                      className="text-3xl font-light bg-transparent text-right w-full focus:outline-none"
                    />
                    <div className="text-gray-400 text-sm">
                      $
                      {sellAmount
                        ? (parseFloat(sellAmount) * 229.8).toFixed(2)
                        : "0"}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Swap direction button */}
            <div className="flex justify-center mx- -mt-3 -mb-3 relative z-10">
              <button className="bg-[#1c2230] border-3 border-[#0e1116] hover:border-[#c9f283] cursor-pointer  rounded-full p-1 hover:bg-[#252e40]">
                <HiArrowsUpDown size={16} color="#4a5565" />
              </button>
            </div>

            {/* Buying section */}
            <div className="p-4 mx-3 rounded-3xl  border border-gray-800">
              <div className="flex  justify-between items-center mb-2">
                <span className="text-sm">Buying</span>
                <div className="flex  items-center gap-2 text-xs text-gray-400">
                  <span>{buyAmount ? `${buyAmount} Bonk` : "0.00 Bonk"}</span>
                </div>
              </div>
              <div className="rounded-lg p-3 ">
                <div className="flex justify-between  ">
                  <div onClick={() => openTokenModal("buy")} >
                    <TokenSelector token="Bonk" iconColor="orange" />
                  </div>
                  <div className="text-right ">
                    <div className="text-3xl  font-light">
                      {buyAmount || "0.00"}
                    </div>
                    <div className="text-gray-400 text-sm">
                      $
                      {buyAmount
                        ? (parseFloat(buyAmount) * 0.0120906).toFixed(2)
                        : "0"}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rate info */}
            <div className="px-4 py-2 flex items-center justify-between text-xs text-gray-400">
              <span>Rate</span>
              <div className="flex items-center gap-1">
                <span>1 SOL = 19,000 Bonk</span>
                <InfoIcon size={12} />
              </div>
            </div>

            {/* Swap button */}
            <div className="p-4">
              <button
                className={`w-full py-4 rounded-lg text-lg  font-semibold ${
                  sellAmount
                    ? "bg-[#76E268] hover:bg-[#65d156] text-black"
                    : "bg-[#c9f283]/60 text-zinc-700"
                }`}
              >
                {sellAmount ? "Swap" : "Enter an amount"}
              </button>
            </div>
          </>
        )}

        {activeTab === "trigger" && <TriggerInterface />}
        {activeTab === "recurring" && <RecurringInterface />}
      </div>

      {/* Chart and history buttons */}
      <div className="flex gap-2 p-4 pt-2">
        <button
          className={`flex items-center gap-2 cursor-pointer rounded-full px-3 py-1.5 text-sm ${
            showChart
              ? "bg-[#3a4a28] text-[#76E268]"
              : "bg-[#1c2230] hover:bg-[#252e40]"
          }`}
          onClick={toggleChart}
        >
          Show Chart
          <EyeIcon size={16} />
        </button>
        <button
          className={`flex items-center gap-2 cursor-pointer rounded-full px-3 py-1.5 text-sm ${
            showHistory
              ? "bg-[#3a4a28] text-[#76E268]"
              : "bg-[#1c2230] hover:bg-[#252e40]"
          }`}
          onClick={toggleHistory}
        >
          Show History
          <EyeIcon size={16} />
        </button>
      </div>

      {showTokenModal && (
        <TokenModal
          onClose={() => setShowTokenModal(false)}
          tokenType={selectedToken}
        />
      )}

      
      {showChart && (
        <div className="mt-4 bg-[#1c2230]/70 backdrop-blur-sm rounded-2xl border border-gray-800 p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Price Chart</h3>
            <button
              className="text-gray-400"
              onClick={() => setShowChart(false)}
            >
              ×
            </button>
          </div>
          <div className="h-64 w-full flex items-center justify-center text-gray-400">
            Chart will appear here
          </div>
        </div>
      )}

      {/* Conditional history display */}
      {showHistory && (
        <div className="mt-4 bg-[#1c2230]/70 backdrop-blur-sm rounded-2xl border border-gray-800 p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Transaction History</h3>
            <button
              className="text-gray-400"
              onClick={() => setShowHistory(false)}
            >
              ×
            </button>
          </div>
          <div className="text-center text-gray-400 py-8">
            No recent transactions
          </div>
        </div>
      )}
    </>
  );
}
