import React, { useContext } from 'react'
import { DataContext } from '../../context/context'
import { animations_object } from '../../utils/animations/animations_object'
import { MainNewsCard } from '../cards/MainNewsCard'
import { ErrorConnect } from '../errors/ErrorConnect'
import { LoadingText } from '../loading/LoadingText'
import { Search } from '../search/Search'

export const Header = () => {
  const { globalStats} = useContext(DataContext)
  const { loading, error, data } = !!globalStats && globalStats
  // debugger
  const {
    active_cryptos,
    upcoming,
    ongoing,
    ended,
    markets,
    total_market_cap,
    total_volume,
    market_cap_percentage,
    updated_at,
    market_cap_change_percentage_24h_usd
  } = data != null && data
  // debugger
  const { intro_left, intro_right } = animations_object;
  return (
    <header className={`header c100`}>
      <h2 className={`title pd-left  ${intro_left}`}>Crypto Ant</h2>
        <Search />
      {/* <div className="header__info c95">
      </div> */}

      <div className={`top__news__container  ${intro_right}`}>
         {
           loading
            ? <LoadingText />
            : error
              ? <ErrorConnect />
              : (
              <ul className="list__news pd--l">
                <li className="news--item">
                  Active cryptos: { active_cryptos }
                  </li>
                <li className="news--item">
                  Upcoming: { upcoming }
                  </li>
                <li className="news--item">
                  OnGoing: { ongoing }
                  </li>
                <li className="news--item">
                  Ended: { ended }
                  </li>
                <li className="news--item">
                  Markets: { markets }
                  </li>
                <li className="news--item">
                  Total market cap: { total_market_cap }
                  </li>
                <li className="news--item">
                  Total volume { total_volume }
                  </li>
                <li className="news--item">
                  Market cap percentage: { market_cap_percentage }
                  </li>
                <li className="news--item">
                  Updated at: { updated_at }
                  </li>
                <li className="news--item">
                  Market cap change percentage 24h USD: { market_cap_change_percentage_24h_usd }
                  </li>
                
                {/* <li className="news--item"> {  }</li> */}
              </ul>)
         }
      </div>
    </header>
      
  )
}
