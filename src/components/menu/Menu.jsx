import React from 'react'
import shib from '../../temp/shib.png';
export const Menu = () => {
  return (
    <section>
      <figure>
        <img src={ shib } alt="" />
      </figure>
      <div>
        <h2>User name</h2>
        <h2>Balance: <span>$6,158.65</span></h2>
      </div>
      <nav>
        <ul>
          <li>Portafolio</li>
          <li>Trade</li>
          <li>Pay</li>
          <li>For you</li>
          <li>Learn and earn</li>
          <li>Notifications</li>
        </ul>
      </nav>
    </section>
  )
}
