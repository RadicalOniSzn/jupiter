import React, { useState } from 'react'
import { TokenSelector } from './TokenSelector'
import { TokenModal } from './TokenModal'

export const TokenInterface = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedToken, setSelectedToken] = useState('SOL')

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  // Optional: handle selecting a token from modal
  const handleSelectToken = (tokenSymbol) => {
    setSelectedToken(tokenSymbol)
    handleCloseModal()
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0d1117] text-white">
      {/* Token Selector (Trigger) */}
      <TokenSelector token={selectedToken} onClick={handleOpenModal} />

      {/* Modal (Overlay) */}
      {isModalOpen && (
        <TokenModal
          onClose={handleCloseModal}
          tokenType="from"
          onSelectToken={handleSelectToken}
        />
      )}
    </div>
  )
}
