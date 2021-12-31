import React from 'react'
import { animations_object } from '../../utils/animations/animations_object'
import { HeaderStats } from './HeaderStats'
import { NftGeneralStats } from './NftGeneralStats'
import { NftRelated } from './NftRelated'

export const NftGlobalStats = () => {
  const { intro } = animations_object;
  return (
    <div className={`global__stats c95 mg--t ${intro}`} style={{ animationDelay: '2s' }}>
      <HeaderStats />
      <NftGeneralStats />
      
      
    </div>
  )
}
