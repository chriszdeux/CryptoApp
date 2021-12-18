import React from 'react'
import { Link } from 'react-router-dom';
import shib from '../../temp/shib.png';
import { MainButton } from '../buttons/MainButton';
import { MenuButton } from '../buttons/MenuButton';

export const Menu = ({values}) => {
  const { handleShowComponent, showComponent } = values
// debugger
  return (
    <section className="menu pd--t--3">
      <figure className="profile__image mg--b--3">
        <img src={ shib } alt="" />
      </figure>
      <div className="menu__stats">
        <h2 className="username">User name</h2>
        <h2 className="balance">Balance: <span>$6,158.65</span></h2>
      </div>
      <nav className="navbar c95 ">
        <ul className="navbar__list mg--t--3">
          <li className="navbar--item mg--b"> <Link to="/">Main</Link> </li>
          <li className="navbar--item mg--b"> <Link to="/portafolio">Portafolio</Link> </li>
          <li className="navbar--item mg--b"><Link to="/trade">Trade</Link></li>
          <li className="navbar--item mg--b"><Link to="/pay">Pay</Link></li>
          {/* <li className="navbar--item mg--b">For you</li> */}
          <li className="navbar--item mg--b"><Link to="/earn">Learn and earn</Link></li>
          <li className="navbar--item mg--b"><Link to="/news">Crypto News</Link></li>
          {/* <li className="navbar--item mg--b"><Link>Notifications</Link></li> */}
        </ul>
      </nav>

      <MainButton message={'Logout'}/>
      <MenuButton values={{handleShowComponent, showComponent }}/>
    </section>
  )
}
