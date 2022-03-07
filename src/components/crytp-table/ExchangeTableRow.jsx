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
import { useIntersectionObserver } from '../../hooks/useIntersection';
import { animations_object } from '../../utils/animations/animations_object';

export const ExchangeTableRow = ({ item }) => {
  const { id, name, country, image, trade_volume_24h_btc, trust_score, trust_score_rank, year_established } = item
  // debugger
  const volumeFormat = useFormatNumbers(trade_volume_24h_btc)
  const { intro, exit } = animations_object
  const [score, setScore] = useState('')
  const assetRef = useRef(null)
  const isVisible = useIntersectionObserver(assetRef)
  useEffect(() => {
    if(trust_score >= 7) {
      setScore('excelent--score')
    } else if ( trust_score < 7 && trust_score >= 3 ) {
      setScore('regular--score')
    } else {
      setScore('bad--score')
    }
  }, [ id ])
  // debugger
  return (
    <>
        <tbody ref={assetRef} className={`${ isVisible ? intro : exit }`}>
            <tr className="table__row c100 ">

              <td className="rank">{ trust_score_rank }</td>
              <td className="coin">
                <figure className="crypto__coin">
                  <LazyLoadImage className="coin--image" src={ image } alt={ id } />
                </figure>
              </td>
  
              <td className="coin--name">{ name }</td>
             

              <td className="country"> { country } </td>
  
              <td className="year">
                { year_established }
              </td>
  
              <td className="volume">${ volumeFormat } btc</td>
              <td className={`trust--score ${ score }`}>
                { trust_score }
              </td>
              <td  className="link--asset" >
                { icons.forward_icon }
              </td>
            </tr>
      </tbody>
      </>
  )
}
