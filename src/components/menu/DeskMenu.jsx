import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { DataContext } from '../../context/context';
import shib from '../../temp/shib.png';
import { MainButton } from '../buttons/MainButton';
import { MenuButton } from '../buttons/MenuButton';
import { BackgroundWaves } from '../waves/BackgroundWaves';

export const DeskMenu = () => {
  const { handleBalance: {
    portafolio_balance
  } } = useContext(DataContext)
  const [cleanBalance, setCleanBalance] = useState(0);
  
  useEffect(() => {
    setCleanBalance( new Intl.NumberFormat().format((portafolio_balance).toFixed(2)) )
  }, [ portafolio_balance ])
  
  return (
    <section className="desk__menu menu pd--t--3">
      {/* <figure className="profile__image mg--b--3">
        <img src={ shib } alt="" />
      </figure> */}
      <div className="menu__stats">
        {/* <h2 className="username">User name</h2> */}
        <h2 className="balance">My balance: <span>${ cleanBalance }</span></h2>
      </div>
      <nav className="navbar c95 ">
        <ul className="navbar__list mg--t--3">
        <li className="navbar--item mg--b"> <NavLink to="/" className={ (nav) => nav.isActive ? 'active' : '' } >Main</NavLink> </li>
          <li className="navbar--item mg--b"> <NavLink to="/portafolio"  className={ (nav) => nav.isActive ? 'active' : '' }>Portafolio</NavLink> </li>
          <li className="navbar--item mg--b"><NavLink to="/trade" className={ (nav) => nav.isActive ? 'active' : '' }>Trade</NavLink></li>
          {/* <li className="navbar--item mg--b"><Link to="/pay">Pay</Link></li> */}
          {/* <li className="navbar--item mg--b">For you</li> */}
          {/* <li className="navbar--item mg--b"><Link to="/earn">Learn and earn</Link></li> */}
          {/* <li className="navbar--item mg--b"><Link to="/news">Crypto News</Link></li> */}
          <li className="navbar--item mg--b"><NavLink to="/nft" className={ (nav) => nav.isActive ? 'active' : '' }>NFT's</NavLink></li>
          {/* <li className="navbar--item mg--b"><Link>Notifications</Link></li> */}
        </ul>
      </nav>
{/* 
      <MainButton message={'Logout'}/>
      <MenuButton values={{handleShowComponent, showComponent }}/> */}
      <BackgroundWaves />
    </section>
  )
}
