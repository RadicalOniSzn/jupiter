import React, { useState } from 'react'
import { TokenSelector } from './TokenSelector'
import { ArrowDownIcon, InfoIcon, ChevronDownIcon } from 'lucide-react'

export default function RecurringInterface() {
  const [allocateAmount, setAllocateAmount] = useState('71')
  const [interval, setInterval] = useState('minute')
  const [showIntervalDropdown, setShowIntervalDropdown] = useState(false)
  const [orders, setOrders] = useState('2')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')

  const handleAllocateAmountChange = (e) => {
    setAllocateAmount(e.target.value)
  }

  const handleOrdersChange = (e) => {
    setOrders(e.target.value)
  }

  const selectInterval = (selected) => {
    setInterval(selected)
    setShowIntervalDropdown(false)
  }

  const toggleIntervalDropdown = () => {
    setShowIntervalDropdown(!showIntervalDropdown)
  }

  return (
    <>
      {/* I Want To Allocate section */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm">I Want To Allocate</span>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span>0.040824342 SOL</span>
            <button className="bg-gray-700 rounded px-2 py-0.5 hover:bg-gray-600">
              HALF
            </button>
            <button className="bg-gray-700 rounded px-2 py-0.5 hover:bg-gray-600">
              MAX
            </button>
          </div>
        </div>
        <div className="bg-[#131722] rounded-lg p-3">
          <div className="flex justify-between">
            <TokenSelector token="SOL" />
            <div className="text-right">
              <input
                type="text"
                value={allocateAmount}
                onChange={handleAllocateAmountChange}
                className="text-3xl font-light bg-transparent text-right w-full focus:outline-none"
              />
              <div className="text-gray-400 text-sm">
                $
                {allocateAmount
                  ? (parseFloat(allocateAmount) * 229.8).toFixed(2)
                  : '0'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Swap direction button */}
      <div className="flex justify-center -mt-3 -mb-3 relative z-10">
        <button className="bg-[#1c2230] border border-gray-700 rounded-full p-1 hover:bg-[#252e40]">
          <ArrowDownIcon size={16} />
        </button>
      </div>

      {/* To Buy section */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm">To Buy</span>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span>1,172,678.62 Bonk</span>
          </div>
        </div>
        <div className="bg-[#131722] rounded-lg p-3">
          <div className="flex justify-between">
            <TokenSelector token="Bonk" iconColor="orange" />
          </div>
        </div>
      </div>

      {/* Interval and Orders settings */}
      <div className="grid grid-cols-2 gap-4 p-4 border-b border-gray-800">
        <div>
          <div className="text-sm mb-2">Every</div>
          <div className="grid grid-cols-3 gap-2">
            <input
              type="number"
              value="1"
              className="col-span-1 bg-[#131722] rounded-lg p-3 text-center focus:outline-none"
              readOnly
            />
            <div className="col-span-2 relative">
              <button
                className="bg-[#131722] rounded-lg p-3 w-full flex items-center justify-between"
                onClick={toggleIntervalDropdown}
              >
                <span>{interval}</span>
                <ChevronDownIcon size={16} />
              </button>
              {showIntervalDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-[#1c2230] border border-gray-800 rounded-lg overflow-hidden z-50">
                  {['minute', 'hour', 'day', 'week', 'month'].map((option) => (
                    <div
                      key={option}
                      className="p-3 hover:bg-[#252e40] cursor-pointer flex items-center"
                      onClick={() => selectInterval(option)}
                    >
                      {option === interval && (
                        <span className="mr-2 text-[#76E268]">✓</span>
                      )}
                      <span>{option}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <div className="text-sm mb-2 flex items-center gap-1">
            <span>Over</span>
            <InfoIcon size={14} className="text-gray-400" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <input
              type="number"
              value={orders}
              onChange={handleOrdersChange}
              className="col-span-1 bg-[#131722] rounded-lg p-3 text-center focus:outline-none"
            />
            <div className="col-span-2 bg-[#131722] rounded-lg p-3 flex items-center justify-center">
              orders
            </div>
          </div>
        </div>
      </div>

      {/* Price Range */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-1">
            <span className="text-sm">Price Range (optional)</span>
            <InfoIcon size={14} className="text-gray-400" />
          </div>
          <div className="text-xs text-gray-400">
            Rate: 0.0908309 SOL / Bonk
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              placeholder="Min Price"
              className="bg-[#131722] rounded-lg p-3 w-full focus:outline-none"
            />
          </div>
          <div>
            <input
              type="text"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="Max Price"
              className="bg-[#131722] rounded-lg p-3 w-full focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Submit button */}
      <div className="p-4">
        <button className="w-full bg-[#76E268]/30 text-[#76E268] py-4 rounded-lg font-medium">
          Insufficient balance
        </button>
      </div>

      {/* Order summary */}
      <div className="border-t border-gray-800 px-4 py-2">
        <button className="w-full flex items-center justify-center gap-2 py-2">
          <span>Recurring Summary</span>
          <ChevronDownIcon size={16} />
        </button>
      </div>
    </>
  )
}
