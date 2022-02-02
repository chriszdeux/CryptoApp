import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/context';
import { useHandleToggleAnimation } from '../../hooks/useHandleToggleAnimation';
import shib from '../../temp/shib.png';
import { animations_object } from '../../utils/animations/animations_object';
import { MainButton } from '../buttons/MainButton';
import { MenuButton } from '../buttons/MenuButton';

export const Menu = ({values}) => {
  const { handleShowComponent, showComponent, animation } = values
// debugger
const { handleBalance: {
  portafolio_balance
} } = useContext(DataContext)
const [cleanBalance, setCleanBalance] = useState(0);
// const { animation, handleAnimation } = useHandleToggleAnimation()

useEffect(() => {
  setCleanBalance( new Intl.NumberFormat().format((portafolio_balance).toFixed(2)) )
}, [ portafolio_balance ])
  const { intro_left } = animations_object;
  return (
    <section className={`menu pd--t--3 ${ animation }`}>
      <figure className="profile__image mg--b--3">
        <img src={ shib } alt="" />
      </figure>
      <div className="menu__stats">
        <h2 className="username">User name</h2>
        <h2 className="balance">Balance: <span>${ cleanBalance }</span></h2>
      </div>
      <nav className="navbar c95 ">
        <ul className="navbar__list mg--t--3">
          <li className="navbar--item mg--b"> <Link to="/">Main</Link> </li>
          <li className="navbar--item mg--b"> <Link to="/portafolio">Portafolio</Link> </li>
          <li className="navbar--item mg--b"><Link to="/trade">Trade</Link></li>
          {/* <li className="navbar--item mg--b"><Link to="/pay">Pay</Link></li> */}
          {/* <li className="navbar--item mg--b">For you</li> */}
          {/* <li className="navbar--item mg--b"><Link to="/earn">Learn and earn</Link></li> */}
          {/* <li className="navbar--item mg--b"><Link to="/news">Crypto News</Link></li> */}
          <li className="navbar--item mg--b"><Link to="/nft">NFT's</Link></li>
          {/* <li className="navbar--item mg--b"><Link>Notifications</Link></li> */}
        </ul>
      </nav>

      {/* <MainButton message={'Logout'}/> */}
      <MenuButton values={{handleShowComponent, showComponent }}/>
    </section>
  )
}
