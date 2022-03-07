import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { DataContext } from '../../context/context';
import { useShowComponent } from '../../hooks/ShowComponent';
import { useFormatNumbers } from '../../hooks/useFormatNumbers';
import { useHandleToggleAnimation } from '../../hooks/useHandleToggleAnimation';
import shib from '../../temp/shib.png';
import { animations_object } from '../../utils/animations/animations_object';
import { MainButton } from '../buttons/MainButton';
import { MenuButton } from '../buttons/MenuButton';
import { ResetBalance } from '../delete/ResetBalance';
import { BackgroundWaves } from '../waves/BackgroundWaves';

export const Menu = ({values}) => {
  const { handleShowComponent, showComponent, animation } = values
// debugger
const { handleBalance: {
  portafolio_balance
}, reduceAmountDollar } = useContext(DataContext)
const portafolioBalanceFormat = useFormatNumbers(portafolio_balance)
  const { showComponent2, handleShowComponent2 } = useShowComponent()
  const { intro_left } = animations_object;
  return (
      <>
    <section className={`menu pd--t--3 ${ animation }`}>
      {/* <figure className="profile__image mg--b--3">
        <img src={ shib } alt="" />
      </figure> */}
      <div className="menu__stats">
        {/* <h2 className="username">User name</h2> */}
        <h2 className="balance">My balance: <span>${ portafolio_balance === 0 ? reduceAmountDollar : portafolioBalanceFormat }</span></h2>
      </div>
      <nav className="navbar c95 ">
        <ul className="navbar__list mg--t--3">
        <li className="navbar--item mg--b"> <NavLink to="/crypto/" className={ (nav) => nav.isActive ? 'active' : '' } >Main</NavLink> </li>
          <li className="navbar--item mg--b"> <NavLink to="/crypto/portfolio"  className={ (nav) => nav.isActive ? 'active' : '' }>Portfolio</NavLink> </li>
          <li className="navbar--item mg--b"><NavLink to="/crypto/trade" className={ (nav) => nav.isActive ? 'active' : '' }>Trade</NavLink></li>
          <li className="navbar--item mg--b"><NavLink to="/crypto/exchange" className={ (nav) => nav.isActive ? 'active' : '' }>Exchanges</NavLink></li>
          {/* <li className="navbar--item mg--b"><Link to="/pay">Pay</Link></li> */}
          {/* <li className="navbar--item mg--b">For you</li> */}
          {/* <li className="navbar--item mg--b"><Link to="/earn">Learn and earn</Link></li> */}
          {/* <li className="navbar--item mg--b"><Link to="/news">Crypto News</Link></li> */}
          <li className="navbar--item mg--b"><NavLink to="/crypto/nft" className={ (nav) => nav.isActive ? 'active' : '' }>NFT's</NavLink></li>
          {/* <li className="navbar--item mg--b"><Link>Notifications</Link></li> */}
        </ul>
        <button className='btn btn--primary' onClick={ handleShowComponent2 }>Reset</button>
      </nav>
      <BackgroundWaves />
      {/* <MainButton message={'Logout'}/> */}
      <MenuButton values={{handleShowComponent, showComponent }}/>

    </section>
      {
        showComponent2 && 
        <ResetBalance handleShowComponent2={ handleShowComponent2 }/>
      }
    <div className='layout' onClick={ handleShowComponent }>
    </div>

    </>
  )
}
