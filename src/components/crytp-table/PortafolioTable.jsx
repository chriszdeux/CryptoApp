import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react/cjs/react.development';
import { animations_object } from '../../utils/animations/animations_object';
import { PortafolioTableHeader } from './PortafolioTableHeader';
import { PortafolioTableRow } from './PortafolioTableRow';

export const PortafolioTable = () => {
  const { intro } = animations_object;

  const asset_state = useSelector(state => state.buy_asset_reducer).sort((a, b) => {
    return b.amount_dollar - a.amount_dollar
  })
  // const [orderData, setOrderData] = useState(
  //   setOrderData( asset_state.sort((a, b) => {
  //         return b.amount_dollar - a.amount_dollar 
  //       }) )
  // );
  // useEffect(() => {
  //   setOrderData( asset_state.sort((a, b) => {
  //     return b.amount_dollar - a.amount_dollar 
  //   }) )
  //   debugger
  // }, [  ])
  // debugger
  {/* <div className="glass"></div> */}
  const [delay, setDelay] = useState(0);
  return (
    <div className="crypto__coins c100" >
        <table className={`crypto__table c95  ${ intro }`} style={{ animationDelay: '2s' }}>
          <PortafolioTableHeader />
                {
                  asset_state.map((item, index) => (
                    // debugger
                    <PortafolioTableRow key={ `${ item.id }` } values={{ item, setDelay, delay }}/>
                  ))
                }
        </table>
        

      </div>
  )
};
