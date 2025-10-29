import React from 'react'
import Navbar from '../components/Navbar';
import SwapInterface from '../components/SwapInterface';
import TokenCharts from "../components/TokenCharts";


import { MessageCircleIcon } from 'lucide-react';

const Swap = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#0e1116] text-white overflow-x-hidden">
      {/* Background image with gradient overlay */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e1116] via-[#0e1116]/90 to-[#0e1116]/80"></div>
        <div className="absolute bottom-0 w-full h-[60%] bg-[url('https://uploadthingy.s3.us-west-1.amazonaws.com/7ckivQW9mXKdsjseXDnkMD/screencapture-jup-ag-swap-2025-10-07-13_29_30.png')] bg-bottom bg-cover opacity-30"></div>
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex flex-col items-center px-4 py-8">
          <div className="w-full max-w-[480px] mx-auto mt-10">
            <SwapInterface />
          </div>
          <div className="w-full max-w-[900px] mx-auto mt-6">
            <TokenCharts />
          </div>
        </main>
        {/* Chat button */}
        <div className="fixed bottom-4 right-4">
          <button className="flex items-center gap-2 bg-[#1c2230] rounded-full px-4 py-2 text-sm hover:bg-[#252e40] transition-colors">
            <MessageCircleIcon size={16} />
            Talk to us
          </button>
        </div>
      </div>
    </div>
  )
}

export default Swap