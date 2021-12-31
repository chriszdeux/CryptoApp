import React from 'react'
import { InterestedEarned } from '../cards/InterestedEarned'
import { LearnAndEarnCard } from '../cards/LearnAndEarnCard'

export const ForYou = () => {
  return (
    <div className="for__you c95">
      <LearnAndEarnCard /> 
      <InterestedEarned />
    </div>
  )
}
