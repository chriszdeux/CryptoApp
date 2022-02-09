import React, { useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { actionWishlist } from '../../actions/actionWishlist';
import { DataContext } from '../../context/context';
import { wishlistReducer } from '../../reducers/wishlistReducer';
import kraken from '../../temp/kraken.png';
import { icons } from '../../utils/icons/icons_object';
import { LazyLoadImage } from 'react-lazy-load-image-component'
// useEffect
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { useShowComponent } from '../../hooks/ShowComponent';
import { scrollTop } from '../../utils/functions/scrollTop';
import { formatNumber } from '../../utils/functions/formatNumber';
import { useFormatNumbers } from '../../hooks/useFormatNumbers';

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
  const navigate = useNavigate()
  const handleWishItem = () => {
    dispatch( actionWishlist(item) )
  }
  // const [cleanNumber, setCleanNumber] = useState(0);
  // // debugger
  const  formatNumber  = useFormatNumbers( current_price )
  
  // debugger
  const { showComponent, handleShowComponent } = useShowComponent(false)
  const handleWish = () => {
    handleWishItem()
    handleShowComponent(!showComponent)
  }

  const handleTop = (id) => {
    setHandleAsset(id)
    scrollTop()
    navigate(`/crypto/crypto-asset/${id}`)
  }

  // debugger
  return (
    <>
        <tbody>
            <tr className="table__row c100 animation_animated animation_fadeIn">
              {/* <td>1</td> */}
  
              <td className="favorite">
                <div onClick={ handleWish } className={ showComponent ? 'active--2' : ''}>
                  { icons.star_icon }
                </div>
              </td>
              <td className="rank">{ market_cap_rank }</td>
              <td className="coin">
                <figure className="crypto__coin">
                  <LazyLoadImage className="coin--image" src={ image } alt={ id } />
                </figure>
              </td>
  
              <td className="coin--name">{ name }<br /><span className="short--name pd--h">{ symbol }</span></td>
              <td className="price">
                ${ formatNumber } <br />
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
              <td  className="link--asset" onClick={() => handleTop(id)}>
                { icons.forward_icon }
                {/* <div to={`/crypto-asset/${id}`}>
                </div> */}
              </td>
              {/* <hr /> */}
            </tr>
      </tbody>
      </>
  )
}
