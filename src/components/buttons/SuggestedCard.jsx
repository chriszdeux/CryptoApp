import React from 'react'
import { icons } from '../../utils/icons/icons_object'
import kraken from '../../temp/kraken.png';
import phone from '../../utils/vector/phone.svg';
export const SuggestedCard = () => {
  return (
    <div className="suggested">
      <div className="suggested__asset">
        <figure>
          <img src={ kraken } alt="" />
        </figure>
        <h2>Asset name</h2>
        <h3>{ icons.up_icon } 3.15%</h3>
        <div>
          <button className="btn btn--primary">Learn More</button>
          <button className="btn btn--dismiss">Dismiss</button>
        </div>
      </div>

      <div className="change__suggestion">
        <div className="asset__prev__next">
          <div className="back">
            { icons.back_icon }
          </div>
          <div className="forward">
            { icons.forward_icon }
          </div>
        </div>
        <figure>
          <img src={ phone } alt="" />
        </figure>
      </div>
      <div className="glass"></div>
    </div>
  )
}
