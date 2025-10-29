
import React, { useState } from 'react'
import MoreMenu from './MoreMenu'
import {
    SearchIcon,
    SettingsIcon,
    ChevronDownIcon,
    ArrowUpRightIcon,
    BellIcon,
  } from 'lucide-react'

const Navbar = () => {
    const [showMoreMenu, setShowMoreMenu] = useState(false)
    const toggleMoreMenu = () => {
      setShowMoreMenu(!showMoreMenu)
    }
  return ( 
    <header className="w-full  border-b border-gray-800">
      <div className="container ">
        <div className="flex items-center h-12">

          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <div className="w-8 h-8 mr-2">
                <img src="./jupiter_logo.webp" alt="" />

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
                className="w-full border border-[#1c2230] text-gray-400 rounded-full py-2 pl-10 pr-4 text-xs "
              />
              <div className="absolute inset-y-0 right-3 flex items-center">
                <span className="text-gray-500">/</span>
              </div>
            </div>
          </div>

          
          <div className=" flex   space-x-4">
            <button className="text-gray-400 hover:text-white relative">
              <BellIcon size={17} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#76E268] rounded-full"></span>
            </button>
            <button className="text-gray-400 hover:text-white">
              <SettingsIcon size={17} />
            </button>
            <button className="flex items-center gap-2 bg-[#1c2230] rounded-full px-3 py-1.5 hover:bg-[#252e40]">
              <div className="w-6 h-6 flex items-center justify-center">
                <img src="./phantom_logo.png" alt="" className='rounded-full'/>
              </div>
              <span className="text-sm">7rs...Vt</span>
              <ChevronDownIcon size={16} />
            </button>
          </div>
        </div>
        
        {/* Watchlist */}
        <div className="flex items-center h-8 text-xs border-t border-gray-800 ">
          <div className="flex items-center gap-2 text-gray-400 cursor-pointer hover:text-white">
            <span className='border-l border-gray-800'>Watchlist</span>
            <ArrowUpRightIcon size={14} />
          </div>
          <div className="ml-4 flex items-center gap-4 overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-1 cursor-pointer hover:bg-[#252e40] px-0.5 py-1 rounded-lg">
              <img src="./solana.jpg" alt="" className='w-4 h-4 rounded-full'/>
              <span>SOL</span>
              <span className='text-gray-400'>$229.77</span>
              <span className="text-red-500">-1.8%</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:bg-[#252e40] px-0.5 py-1 rounded-lg">
              <img src="./jupiter_logo.webp" alt="" className='w-4 h-4 rounded-full'/>
              <span>JUP</span>
              <span className='text-gray-400'>$0.46545</span>
              <span className="text-green-500">0.1%</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:bg-[#252e40] px-0.5 py-1 rounded-lg">
              <img src="./bonk.jpg" alt="" className='w-4 h-4 rounded-full'/>
              <span>BONK</span>
              <span className='text-gray-400'>$0.01204</span>
              <span className="text-green-500">+2.29%</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar