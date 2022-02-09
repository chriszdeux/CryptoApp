import React, { useContext, useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionTotalBalance } from '../../actions/actionTotalBalance';
import { DataAssetContext, DataContext } from '../../context/context';
import { useFetchAsset } from '../../hooks/fetchHooks/useFetchAsset';
import { icons } from '../../utils/icons/icons_object';
import { ErrorConnect } from '../errors/ErrorConnect';
import { LoadingText } from '../loading/LoadingText';
import { LazyLoadImage } from 'react-lazy-load-image-component';


export const PortafolioTableRow = ({ values }) => {
  const { item, setDelay, delay } = values
  // debugger
  const { setHandleAsset, setHandleBalance, handleBalance: {
    portafolio_balance, total_amount_invested
  } } = useContext(DataContext) 
  const { id, name, symbol, image, amount_crypto, amount_dollar } = item
  const { loading, error, data } = useFetchAsset(id)
  // const { current_price_usd, price_change_24h,  } = data.length > 0 && data
  const dispatch = useDispatch()
  const [balance, setBalance] = useState(0);
  const [checkBalance, setCheckBalance] = useState([]);
  // const [countBalance, setCountBalance] = useState(balance);
  
  useEffect(() => {
    // setBalance(0)
    // debugger
    if(data.length > 0) {
      setBalance( data[0].current_price_usd?.replace(/\,/g, '') * amount_crypto )
      // debugger
    }
  }, [ data, portafolio_balance ])
  // debugger
  useEffect(() => {
    if(balance > 0) {
      setHandleBalance({
        portafolio_balance: portafolio_balance + balance,
        total_amount_invested: total_amount_invested + Number(amount_dollar)
      })
      // dispatch( actionTotalBalance({ amount_dollar, balance }) )
    }
  }, [ balance ])
  // debugger
  // useEffect(() => {
  //   // debugger
  //   if(data.id && balance !==NaN) {
  //     // debugger
  //     // debugger0
  //     setCountBalance(countBalance + balance)
      
  //     console.log( countBalance )
  //   }
    
  // }, [ data ])
  // debugger
  return (
   <>
      {
        loading
          ? <LoadingText />
          : error 
            ? <ErrorConnect />
            :
            <tbody >
            <tr className="table__row c100 animation_animated animation_fadeIn" >
              <td className="coin">
                <figure className="crypto__coin">
                  <LazyLoadImage className="coin--image" src={ image } alt={ id } />
                </figure>
              </td>

              <td className="coin--name">{ name }<br /><span className="short--name pd--h">{ symbol }</span></td>


              <td className="coin--name">$ { new Intl.NumberFormat().format(balance) }<br /><span className="short--name pd--h">{ new Intl.NumberFormat().format(amount_crypto) } { symbol }</span></td>
              <td className='total--invested'>
                ${ amount_dollar }
              </td>
              <td className="price">
                ${ data[0].current_price_usd } <br />
                {/* <span className="supply">
                Supply $1,521,625.236  
                </span> */}
                <span className={`market--mark ${ data[0].price_change_percentage_24h > 0 ? 'gainer--color' : 'loser--color' }`  }>
                  { data[0].price_change_percentage_24h > 0 ? icons.up_icon : icons.down_icon} { data[0].price_change_percentage_24h }%
                  </span>
              </td>
              <td  className="link--asset" onClick={() => setHandleAsset(id)}>
                <Link to={`/crypto/crypto-asset/${id}`}>
                { icons.forward_icon }
                </Link>
              </td>
              {/* <td className="market--cap--24h">
                
              </td> */}
            </tr>
          </tbody>


      }
   </>
  )
};
