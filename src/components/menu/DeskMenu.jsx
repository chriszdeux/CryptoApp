import React, { useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { actionRemoveBuy } from '../../actions/actionBuy';
import { DataContext } from '../../context/context';
import { useShowComponent } from '../../hooks/ShowComponent';
import { useFormatNumbers } from '../../hooks/useFormatNumbers';
import shib from '../../temp/shib.png';
import { MainButton } from '../buttons/MainButton';
import { MenuButton } from '../buttons/MenuButton';
import { ResetBalance } from '../delete/ResetBalance';
import { BackgroundWaves } from '../waves/BackgroundWaves';

export const DeskMenu = () => {
  const { handleBalance: {
    portafolio_balance
  }, reduceAmountDollar } = useContext(DataContext)
  const portafolioBalanceFormat = useFormatNumbers(portafolio_balance)
  // const [cleanBalance, setCleanBalance] = useState(0);
  const { showComponent2, handleShowComponent2 } = useShowComponent()
  // useEffect(() => {
  //   setCleanBalance( new Intl.NumberFormat().format((portafolio_balance).toFixed(2)) )
  // }, [ portafolio_balance ])
  
  return (
    <section className="desk__menu menu pd--t--3">
      {/* <figure className="profile__image mg--b--3">
        <img src={ shib } alt="" />
      </figure> */}
      <div className="menu__stats">
        {/* <h2 className="username">User name</h2> */}
        <h2 className="balance">My balance: <span>${ portafolio_balance === 0 ? reduceAmountDollar : portafolioBalanceFormat }</span></h2>
      </div>
      <nav className="navbar c95 ">
        <ul className="navbar__list mg--t--3">
        <li className="navbar--item mg--b"> <NavLink to="./crypto/" className={ (nav) => nav.isActive ? 'active' : '' } >Main</NavLink> </li>
          <li className="navbar--item mg--b"> <NavLink to="./crypto/portafolio"  className={ (nav) => nav.isActive ? 'active' : '' }>Portafolio</NavLink> </li>
          <li className="navbar--item mg--b"><NavLink to="./crypto/trade" className={ (nav) => nav.isActive ? 'active' : '' }>Trade</NavLink></li>
          <li className="navbar--item mg--b"><NavLink to="./crypto/exchange" className={ (nav) => nav.isActive ? 'active' : '' }>Exchanges</NavLink></li>
          {/* <li className="navbar--item mg--b"><Link to="/pay">Pay</Link></li> */}
          {/* <li className="navbar--item mg--b">For you</li> */}
          {/* <li className="navbar--item mg--b"><Link to="/earn">Learn and earn</Link></li> */}
          {/* <li className="navbar--item mg--b"><Link to="/news">Crypto News</Link></li> */}
          <li className="navbar--item mg--b"><NavLink to="/crypto/nft" className={ (nav) => nav.isActive ? 'active' : '' }>NFT's</NavLink></li>
          {/* <li className="navbar--item mg--b"><Link>Notifications</Link></li> */}
        </ul>

        <button className='btn btn--primary' onClick={ handleShowComponent2 }>Reset</button>
      </nav>
{/* 
      <MainButton message={'Logout'}/>
      <MenuButton values={{handleShowComponent, showComponent }}/> */}
      <BackgroundWaves />
      {
        showComponent2 && 
        <ResetBalance handleShowComponent2={ handleShowComponent2 }/>
      }
    </section>
  )
}
