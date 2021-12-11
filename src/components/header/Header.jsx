import React from 'react'
import { MainNewsCard } from '../cards/MainNewsCard'
import { Search } from '../search/Search'

export const Header = () => {
  return (
    <header className="header c100">
      <h2 className="title pd-left">Crypto Ant</h2>
        <Search />
      {/* <div className="header__info c95">
      </div> */}

      <div className="top__news__container">
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
