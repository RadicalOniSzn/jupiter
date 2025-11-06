import React from "react";
import { DollarSignIcon, BellIcon, LayoutIcon } from "lucide-react";
import { FaTwitter, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

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
        <div className="border-t items-center border-gray-800 mt-2 pt-2">
          <div className="flex justify-center sm:justify-start space-x-8 px-4 mt-5 mb-3 sm:mt-6 text-xl sm:text-2xl text-gray-400">
            <Link to="#"className="text-gray-400 hover:text-[#c9f283]"><FaTwitter /></Link>
            <Link to="#"className="text-gray-400 hover:text-[#c9f283]"><FaGithub /></Link>
            <Link to="#"className="text-gray-400 hover:text-[#c9f283]"><FaLinkedin /></Link>
            <Link to="#"className="text-gray-400 hover:text-[#c9f283]"><FaYoutube /></Link>
            <Link to="#"className="text-gray-400 hover:text-[#c9f283]"><FaTwitter /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
