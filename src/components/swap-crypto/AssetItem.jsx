import React from 'react'
import shib from '../../temp/shib.png';
import { Divider } from '../helpers/Divider';

export const AssetItem = () => {
  return (
      <>
    <li className="asset--item c100">
      <div>
        <figure className="asset--logo">
          <img src={ shib } alt="" />
        </figure>
          <h3 className="asset--name"><strong>Bitcoin</strong> BTC</h3>
        </div>
      <h3 className="asset--price">$65,854.36<strong className="gainer">+0.36%</strong></h3>
    </li>
      <Divider />
      </>
  )
}
