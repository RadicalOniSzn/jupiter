import React, { useState } from "react";
import { TokenSelector } from "./TokenSelector";
import { HiArrowsUpDown } from "react-icons/hi2";
import {InfoIcon, ChevronDownIcon } from "lucide-react";
import { TokenModal } from "./TokenModal";

export default function TriggerInterface() {
  
  const [sellAmount, setSellAmount] = useState("");
  const [rate, setRate] = useState("0.00000009000000");
  const [expiry, setExpiry] = useState("Never");
  
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

  const handleRateChange = (e) => {
    setRate(e.target.value);
  };

  const toggleExpiry = () => {
    if (expiry === "Never") {
      setExpiry("1 Day");
    } else if (expiry === "1 Day") {
      setExpiry("1 Week");
    } else if (expiry === "1 Week") {
      setExpiry("1 Month");
    } else {
      setExpiry("Never");
    }
  };

  return (
    <>
      {/* Ultra badge */}
      <div className="p-4">
        <div className="flex items-center gap-2 bg-[#1c2230] rounded-lg px-3 py-1.5 w-fit cursor-pointer hover:bg-[#252e40]">
          <div className="w-5 h-5 flex items-center justify-center">
            <span className="text-[#76E268] text-lg">⚡</span>
          </div>
          <span className="text-sm">Ultra</span>
          <InfoIcon size={14} className="text-gray-400" />
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
      <div className="p-4 border-b border-gray-800">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm">Buying</span>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span>1,172,678.62 Bonk</span>
          </div>
        </div>
        <div className="bg-[#131722] rounded-lg p-3">
          <div className="flex justify-between">
            <TokenSelector token="Bonk" iconColor="orange" />
            <div className="text-right">
              <div className="text-3xl font-light">
                {sellAmount && parseFloat(sellAmount) > 0
                  ? Math.floor(
                      parseFloat(sellAmount) / parseFloat(rate)
                    ).toLocaleString()
                  : "0"}
              </div>
              <div className="text-gray-400 text-sm">
                $
                {sellAmount && parseFloat(sellAmount) > 0
                  ? (
                      Math.floor(parseFloat(sellAmount) / parseFloat(rate)) *
                      0.0120906
                    ).toFixed(2)
                  : "0"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rate and expiry settings */}
      <div className="grid grid-cols-2 gap-4 p-4">
        <div>
          <div className="text-sm mb-2 flex items-center justify-between">
            <span>Buy Bonk at rate</span>
            <button className="text-xs text-gray-400 bg-[#1c2230] px-2 py-1 rounded">
              Use Market
            </button>
          </div>
          <div className="bg-[#131722] rounded-lg p-3 flex items-center">
            <input
              type="text"
              value={rate}
              onChange={handleRateChange}
              className="bg-transparent text-right w-full focus:outline-none"
            />
            <span className="text-gray-400 ml-2">SOL</span>
          </div>
          <div className="text-xs text-gray-400 mt-1 text-right">
            ≈ $0.000021
          </div>
        </div>

        <div>
          <div className="text-sm mb-2">Expiry</div>
          <button
            className="bg-[#131722] rounded-lg p-3 w-full flex items-center justify-between"
            onClick={toggleExpiry}
          >
            <span>{expiry}</span>
            <ChevronDownIcon size={16} />
          </button>
        </div>
      </div>

      {/* Submit button */}
      <div className="p-4">
        <button className="w-full bg-[#76E268]/80 hover:bg-[#76E268] text-black py-4 rounded-lg font-medium">
          Place Trigger Order
        </button>
      </div>

      {/* Disclaimer */}
      <div className="px-4 pb-4 text-xs text-gray-400 flex items-center gap-2">
        <span>
          Ultra Mode: You will receive at least 0 Bonk, minus platform fees.
        </span>
        <button className="text-[#76E268] underline">Learn more</button>
      </div>

      {/* Order summary */}
      <div className="border-t border-gray-800 px-4 py-2">
        <button className="w-full flex items-center justify-center gap-2 py-2">
          <span>Trigger Summary</span>
          <ChevronDownIcon size={16} />
        </button>
      </div>
    </>
  );
}
