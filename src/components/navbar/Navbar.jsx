import React from 'react'

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav__profile">
        <figure>
          <img src="" alt="profile" />
        </figure>
        <h3>CryptoDeux</h3>
        <h3>Balance: <span>$6,458.15</span></h3>
      </div>
      <ul className="navbar__navigator">
        <li className="navbar--item">Portafolio</li>
      </ul>
      <button className="btn">Logout</button>
    </nav>
  )
}
