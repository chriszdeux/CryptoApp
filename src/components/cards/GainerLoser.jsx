import React from 'react'
import { GainerCard } from './GainerCard'
import { LoserCard } from './LoserCard'

export const GainerLoser = () => {
  return (
    <div className="feature c95">
      <h2>Top 5 Gainers and Losers</h2>
      <div className="gainers__losers">
        <GainerCard />
        <LoserCard />
      </div>
    </div>
  )
}
