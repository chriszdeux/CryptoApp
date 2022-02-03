import React, { useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionWishlist } from '../../actions/actionWishlist';
import { DataContext } from '../../context/context';
import { wishlistReducer } from '../../reducers/wishlistReducer';
import kraken from '../../temp/kraken.png';
import { icons } from '../../utils/icons/icons_object';

export const TableRow = ({ item }) => {
  const { setHandleAsset } = useContext(DataContext)
  const { 
    id, 
    name,
    symbol,
    current_price,
    price_change_24h, 
    image, 
    ath,
    high_24h, 
    low_24h,
    market_cap,
    market_cap_change_percentage_24h,
    market_cap_rank,
    total_volume,
    total_supply,
    circulating_supply,
    favorite
  } = item;
  // debugger
  const dispatch = useDispatch()
  // debugger
  const handleWishItem = () => {
    dispatch( actionWishlist(item) )
  }
  return (
    <>
        <tbody>
            <tr className="table__row c100 animation_animated animation_fadeIn">
              {/* <td>1</td> */}
  
              <td className="favorite">
                <div onClick={ handleWishItem } className={ `${ favorite ? 'favorite--color' : 'favorite' }` }>
                  { icons.star_icon }
                </div>
              </td>
              <td className="rank">{ market_cap_rank }</td>
              <td className="coin">
                <figure className="crypto__coin">
                  <img className="coin--image" src={ image } alt={ id } />
                </figure>
              </td>
  
              <td className="coin--name">{ name }<br /><span className="short--name pd--h">{ symbol }</span></td>
              <td className="price">
                ${ current_price } <br />
                {/* <span className="supply">
                Supply $1,521,625.236  
                </span> */}
              </td>

              <td className={`market--cap--7d ${ price_change_24h > 0 ? 'gainer--color' : 'loser--color' }`}>$ { price_change_24h }</td>
  
              <td className="market--cap--24h">
                <span className={`market--mark ${ market_cap_change_percentage_24h > 0 ? 'gainer--color' : 'loser--color' }`  }>
                  { market_cap_change_percentage_24h > 0 ? icons.up_icon : icons.down_icon} { market_cap_change_percentage_24h }%
                  </span>
              </td>
  
              <td className="volume">${ total_volume }</td>
              <td className="supply">$ { circulating_supply }
              </td>
              <td className="supply">$ { total_supply }
              </td>
              <td  className="link--asset" onClick={() => setHandleAsset(id)}>
                <Link to="/crypto-asset">
                { icons.forward_icon }
                </Link>
              </td>
              {/* <hr /> */}
            </tr>
      </tbody>
      </>
  )
}
