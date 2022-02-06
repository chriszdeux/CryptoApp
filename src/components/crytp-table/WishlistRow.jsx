import React, { useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionRemoveFromWishlist, actionWishlist } from '../../actions/actionWishlist';
import { DataContext } from '../../context/context';
import { useFetchAsset } from '../../hooks/fetchHooks/useFetchAsset';
import { wishlistReducer } from '../../reducers/wishlistReducer';
import kraken from '../../temp/kraken.png';
import { icons } from '../../utils/icons/icons_object';
import { ErrorConnect } from '../errors/ErrorConnect';
import { LoadingText } from '../loading/LoadingText';
import { LazyLoadImage } from 'react-lazy-load-image-component';


export const WishlistRow = ({ item }) => {
  const { setHandleAsset } = useContext(DataContext)
  const { 
    id, 
    name,
    symbol,
    image, 
    market_cap_rank,
    logo,
    rank,
    // market_cap,
    // current_price,
    // price_change_24h, 
    // ath,
    // high_24h, 
    // low_24h,
    // market_cap_change_percentage_24h,
    // total_volume,
    // total_supply,
    // circulating_supply,
    favorite
  } = item;
  // debugger
  const dispatch = useDispatch()
  const { loading, error, data } = useFetchAsset(id)
  const { 
    current_price_usd,
    market_cap_usd,
    market_cap_change_percentage_24h,
    price_change_percentage_24h_in_currency_usd,
    price_change_percentage_24h,
    circulating_supply,
    total_supply,
    total_volume_usd,

   } = data.length > 0 && data[0]
  // debugger
  const handleWishItem = () => {
    dispatch( actionWishlist(item) )
  }
  // if(data.length > 0) {
  //   debugger
  // }
  // debugger
  const handleRemoveWishlist = () => {
    dispatch( actionRemoveFromWishlist(id) )
  }
  return (
    <>
        <tbody>
            {
              loading 
              ? <LoadingText />
              : error
                ? <ErrorConnect />
                :
                <tr className="table__row c100 animation_animated animation_fadeIn">
              {/* <td>1</td> */}
  
              <td className="favorite">
                <div onClick={ favorite ? handleRemoveWishlist : handleWishItem } className={  'favorite--color' }>
                  {
                    favorite 
                    ? icons.remove_icon
                    : icons.star_icon
                  }
                </div>
              </td>
              <td className="rank">{ rank ? rank : market_cap_rank }</td>
              <td className="coin">
                <figure className="crypto__coin">
                  <LazyLoadImage className="coin--image" src={ logo ? logo.small : image } alt={ id } />
                </figure>
              </td>
  
              <td className="coin--name">{ name }<br /><span className="short--name pd--h">{ symbol }</span></td>
              <td className="price">
                ${ current_price_usd } <br />
                {/* <span className="supply">
                Supply $1,521,625.236  
                </span> */}
              </td>

              <td className={`market--cap--7d ${ price_change_percentage_24h > 0 ? 'gainer--color' : 'loser--color' }`}>$ { price_change_percentage_24h }</td>
  
              <td className="market--cap--24h">
                <span className={`market--mark ${ market_cap_change_percentage_24h > 0 ? 'gainer--color' : 'loser--color' }`  }>
                  { market_cap_change_percentage_24h > 0 ? icons.up_icon : icons.down_icon} { market_cap_change_percentage_24h }%
                  </span>
              </td>
  
              <td className="volume">${ total_volume_usd }</td>
              <td className="supply">$ { circulating_supply }
              </td>
              <td className="supply">$ { total_supply }
              </td>
              <td  className="link--asset" onClick={() => setHandleAsset(id)}>
                <Link to={`/crypto-asset/${id}`}>
                { icons.forward_icon }
                </Link>
              </td>
              {/* <hr /> */}
            </tr>
            }
      </tbody>
      </>
  )
}
