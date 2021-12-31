import React from 'react'
import { animations_object } from '../../utils/animations/animations_object'
import { MoreNews } from '../cards/MoreNews';
import { NewsCard } from '../cards/NewsCard'

export const NewsCrypto = () => {
  const { intro } = animations_object;
  return (
    <div className={`wrapper c100 ${ intro }`} style={{ animationDelay: '1.6s' }}>
      <h2 className="wrapper--title">News on Crypto</h2>
      <div className="wrapper__cards w--h c100">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <MoreNews />

      </div>
    </div>
  )
}
