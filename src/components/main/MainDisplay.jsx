import React from 'react'
import { MainButton } from '../buttons/MainButton'
import { MoreNews } from '../cards/MoreNews'
import { NewsCard } from '../cards/NewsCard'
import { SmallCardCoins } from '../cards/SmallCardCoins'
import { SmallCardExchange } from '../cards/SmallCardExchange'
import { BackgroundImage } from './BackgroundImage'
export const MainDisplay = () => {
  return (
    <main className="main mg--b">
      {/* <div className="blur"></div> */}
      <MainButton message={'Start Trade'}/>
      {/* <BackgroundImage /> */}
    </main>
  )
}
