import React from 'react'
import { animations_object } from '../../utils/animations/animations_object'
import { MainNewsCard } from '../cards/MainNewsCard'
import { Search } from '../search/Search'

export const Header = () => {
  const { intro_left, intro_right } = animations_object;
  return (
    <header className={`header c100`}>
      <h2 className={`title pd-left  ${intro_left}`}>Crypto Ant</h2>
        <Search />
      {/* <div className="header__info c95">
      </div> */}

      <div className={`top__news__container  ${intro_right}`}>
         <ul className="list__news pd--l">
           <li className="news--item">bitcoin: $62,654.15</li>
           <li className="news--item">bitcoin: $62,654.15</li>
           <li className="news--item">bitcoin: $62,654.15</li>
           <li className="news--item">bitcoin: $62,654.15</li>
           <li className="news--item">bitcoin: $62,654.15</li>
           <li className="news--item">bitcoin: $62,654.15</li>
           <li className="news--item">bitcoin: $62,654.15</li>
           <li className="news--item">bitcoin: $62,654.15</li>
           <li className="news--item">bitcoin: $62,654.15</li>
           <li className="news--item">bitcoin: $62,654.15</li>
           <li className="news--item">bitcoin: $62,654.15</li>
           <li className="news--item">bitcoin: $62,654.15</li>
         </ul>
      </div>
    </header>
      
  )
}
