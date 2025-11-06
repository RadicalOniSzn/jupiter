import React, { useState, useEffect, useRef } from "react";
import MoreMenu from "./MoreMenu";
import {
  SearchIcon,
  SettingsIcon,
  ChevronDownIcon,
  ArrowUpRightIcon,
  BellIcon,
} from "lucide-react";
import { RiEqualizer3Fill } from "react-icons/ri";

const Navbar = () => {
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [watchlist, setWatchlist] = useState([]);
  const prevPrices = useRef({}); // store previous prices for animation

  const toggleMoreMenu = () => setShowMoreMenu(!showMoreMenu);

  useEffect(() => {
    const coins = ["solana", "jupiter-exchange-solana", "bonk"];

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coins.join(
            ","
          )}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
        );
        const data = await response.json();

        // Detect price changes
        const updated = data.map((coin) => {
          const prev = prevPrices.current[coin.id];
          const changeDirection =
            prev && coin.current_price !== prev
              ? coin.current_price > prev
                ? "up"
                : "down"
              : null;
          prevPrices.current[coin.id] = coin.current_price;
          return { ...coin, changeDirection };
        });

        setWatchlist(updated);
      } catch (error) {
        
        console.error("Error fetching market data:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full border-b border-gray-800">
      <div className="con  tainer">
        <div className="flex items-center h-12">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <div className="w-8 h-8 mr-2">
                <img src="./jupiter_logo.webp" alt="Logo" />
              </div>
              <span className="text-sm font-medium text-[#c9f283]">Swap</span>
            </div>
            <nav className="hidden md:flex items-center text-sm font-medium space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#c9f283]">
                Pro
              </a>
              <a href="#" className="text-gray-400 hover:text-[#c9f283]">
                Perps
              </a>
              <div className="relative">
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#c9f283] flex items-center"
                >
                  Lend
                  <span className="absolute -top-2 -right-8 bg-green-500 text-xs px-1 rounded text-black">
                    Beta
                  </span>
                </a>
              </div>
              <a href="#" className="text-gray-400 hover:text-[#c9f283]">
                Portfolio
              </a>
              <button
                onClick={toggleMoreMenu}
                className="text-gray-400 hover:text-[#c9f283] relative"
              >
                More
                {showMoreMenu && (
                  <MoreMenu onClose={() => setShowMoreMenu(false)} />
                )}
              </button>
            </nav>
          </div>

          {/* Search */}
          <div className="flex-1 mx-4 md:mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <SearchIcon size={18}  />
              </div>
              <input
                type="text"
                placeholder="Search for any Token, Wallet or Feature"
                className="w-[85%] border border-[#1c2230] text-gray-400 rounded-full py-2 pl-10 pr-4 text-xs"
              />
              <div className="absolute inset-y-0 right-20 flex items-center">
                <span className=" text-gray-500">/</span>
              </div>
            </div>
          </div>

          {/* Icons */}
          <div className="flex space-x-4">
            <button className="text-gray-400 hover:text-white relative">
              <BellIcon size={17} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#76E268] rounded-full"></span>
            </button>
            <button className="text-gray-400 hover:text-white">
              <SettingsIcon size={17} />
            </button>
            <button className="flex items-center gap-2 bg-[#1c2230] rounded-full px-3 py-1.5 hover:bg-[#252e40]">
              <div className="w-6 h-6 flex items-center justify-center">
                <img src="./phantom_logo.png" alt="" className="rounded-full" />
              </div>
              <span className="text-sm">7rs...Vt</span>
              <ChevronDownIcon size={16} />
            </button>
          </div>
        </div>

        {/* Watchlist */}
        <div className="flex items-center h-8 text-xs border-t border-gray-800">
          <div className="flex items-center gap-2 text-gray-400 cursor-pointer hover:text-white">
            <span className="border-l border-gray-800 pl-2">Watchlist</span>
            <RiEqualizer3Fill />
            <ArrowUpRightIcon size={14} />
          </div>

          <div className="ml-4 flex items-center gap-4 overflow-x-auto scrollbar-hide">
            {watchlist.map((coin) => (
              <div
                key={coin.id}
                className={`flex items-center gap-1 cursor-pointer px-1 py-1 rounded-lg hover:bg-[#252e40]
        ${
          coin.changeDirection === "up"
            ? "animate-flashGreen"
            : coin.changeDirection === "down"
            ? "animate-flashRed"
            : ""
        }`}
              >
                <img
                  src={coin.image}
                  alt={coin.symbol}
                  className="w-4 h-4 rounded-full"
                />
                <span>{coin.symbol.toUpperCase()}</span>
                <span className="text-gray-400">
                  $
                  {coin.current_price < 0.01
                    ? coin.current_price.toFixed(8)
                    : coin.current_price.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                </span>
                <span
                  className={
                    coin.price_change_percentage_24h >= 0
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
