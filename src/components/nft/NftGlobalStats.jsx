import React from 'react'
import { HeaderStats } from './HeaderStats'
import { NftGeneralStats } from './NftGeneralStats'
import { NftRelated } from './NftRelated'

export const NftGlobalStats = () => {
  return (
    <div className="global__stats c95 mg--t">
      <HeaderStats />
      <NftGeneralStats />
      
      
    </div>
  )
}
