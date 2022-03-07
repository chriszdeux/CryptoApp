import React, { useContext, useEffect, useRef, useState } from 'react'
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
import { WishlistPopup } from '../../pop-ups/WishlistPopup';
import { animations_object } from '../../utils/animations/animations_object';
import { useIntersectionObserver } from '../../hooks/useIntersection';

export const TableRow = ({ item }) => {
  const { setHandleAsset } = useContext(DataContext)
  const [show, setShow] = useState(false)
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
  const  volumeFormat = useFormatNumbers(total_volume)
  const  circulatingFormat = useFormatNumbers(circulating_supply)
  const  supplyFormat = useFormatNumbers(total_supply)
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
  const { intro, exit } = animations_object
  const [animation, setAnimation] = useState(intro)
  const handleWish = () => {
    handleWishItem()
    handleShowComponent(!showComponent)
    setTimeout(() => {
      setAnimation(exit)
      setTimeout(() => {
        handleShowComponent(!showComponent)
      }, 1000);
    }, 2000);
  }

  const handleTop = (id) => {
    setHandleAsset(id)
    scrollTop()
    navigate(`/crypto/crypto-asset/${id}`)
  }

  const assetRef = useRef(null)
  const isVisible = useIntersectionObserver(assetRef)
  // debugger
  return (
    <>
        <tbody ref={ assetRef } className={`${ isVisible ? intro : exit }`}>
            <tr className="table__row c100 animation_animated animation_fadeIn">
              {/* <td>1</td> */}
  
              <td className="favorite">
                <div onClick={ handleWish } className={ showComponent ? 'active--2' : ''}>
                  { icons.star_icon }
                </div>
              </td>
              <td className="rank">{ market_cap_rank }</td>
              <td className="coin" onClick={() => handleTop(id)}>
                <figure className="crypto__coin">
                  <LazyLoadImage className="coin--image" src={ image } alt={ id } />
                </figure>
              </td>
  
              <td className="coin--name" onClick={() => handleTop(id)}>{ name }<br /><span className="short--name pd--h">{ symbol }</span></td>
              <td className="price">
                ${ current_price > 1 ? formatNumber : current_price } <br />
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
  
              <td className="volume">${ volumeFormat }</td>
              <td className="supply">$ { circulatingFormat }
              </td>
              <td className="supply">$ { supplyFormat }
              </td>
              <td  className="link--asset" onClick={() => handleTop(id)}>
                { icons.forward_icon }
                {/* <div to={`/crypto-asset/${id}`}>
                </div> */}
              </td>
              {/* <hr /> */}
            </tr>
      </tbody>
      {
        showComponent &&
        <WishlistPopup values={{ animation, name }}/>
      }

      </>
  )
}
