import React from "react";
import { DollarSignIcon, BellIcon, LayoutIcon } from "lucide-react";

export default function MoreMenu({ onClose }) {
  return (
    <div className="absolute top-full left-0 mt-2 w-80 bg-[#1c2230] border border-gray-800 rounded-lg overflow-hidden shadow-lg z-50">
      <div className="p-2 max-h-[80vh] overflow-y-auto">
        {/* Positions / PnL */}
        <div className="p-3 hover:bg-[#252e40] rounded-lg cursor-pointer">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-[#252e40] flex items-center justify-center">
              <DollarSignIcon size={18} className="text-[#76E268]" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-medium">Positions / PnL</span>
                <span className="text-xs bg-[#76E268] text-black px-1 rounded">
                  New
                </span>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-400 text-left">
            View live token positions and PnL.
          </p>
        </div>

        {/* Updates */}
        <div className="p-3 hover:bg-[#252e40] rounded-lg cursor-pointer">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-[#252e40] flex items-center justify-center">
              <BellIcon size={18} className="text-[#76E268]" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-medium">Updates</span>
                <span className="text-xs bg-[#76E268] text-black px-1 rounded">
                  New
                </span>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-400 text-left">
            Keep up to date with the latest product updates in the Jupiverse.
          </p>
        </div>

        {/* JLP Loans */}
        <div className="p-3 hover:bg-[#252e40] rounded-lg cursor-pointer">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-[#252e40] flex items-center justify-center">
              <DollarSignIcon size={18} className="text-[#76E268]" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-medium">JLP Loans</span>
                <span className="text-xs bg-[#252e40] text-white border border-gray-700 px-1 rounded">
                  BETA
                </span>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-400 text-left">
            Borrow USDC using JLP tokens as collateral.
          </p>
        </div>

        {/* Studio */}
        <div className="p-3 hover:bg-[#252e40] rounded-lg cursor-pointer">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-[#252e40] flex items-center justify-center">
              <BellIcon size={18} className="text-[#76E268]" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-medium">Studio</span>

              </div>
            </div>
          </div>
          <p className="text-sm text-gray-400 text-left ml-4">
            Everything you need to launch, manage, and scale your token economy
            on a single platform.
          </p>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 mt-2 pt-2">
          <div className="grid grid-cols-5 gap-4 p-3">
            {[
              { name: "Twitter", icon: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6..." },
              { name: "Discord", icon: "M8.56 2.75c4.37 6.03 6.02 9.42..." },
              { name: "Telegram", icon: "M21.73 18.35L18.36 5.65..." },
              { name: "YouTube", icon: "M2.5 17a24.12 24.12 0 010-10..." },
              { name: "Reddit", icon: "M12 8v8 M8 12h8" },
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                className="flex flex-col items-center gap-1 text-gray-400 hover:text-white"
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={item.icon}></path>
                  </svg>
                </div>
                <span className="text-xs">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
