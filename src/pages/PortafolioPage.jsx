import React, { useContext, useEffect, useState } from 'react';


import { icons } from '../utils/icons/icons_object';
import { BackgroundImage } from '../components/main/BackgroundImage';
import { animations_object } from '../utils/animations/animations_object';
import { useSelector } from 'react-redux';
import { PortafolioTable } from '../components/crytp-table/PortafolioTable';
import { EmptyComponent } from '../components/emptyComponent/EmptyComponent';
import { AssetTransactions } from '../components/coin-asset/AssetTransactions';
import { DataContext } from '../context/context';
import { WishlistTable } from '../components/crytp-table/WishlistTable';
import { GainerLoser } from '../components/cards/GainerLoser';
import { useFormatNumbers } from '../hooks/useFormatNumbers';


export const PortafolioPage = () => {
  const { intro } = animations_object;
  const data = useSelector(state => state.wishlist_reducer)
  const dataAssets = useSelector(state => state.buy_asset_reducer)

  const dataTransaction = useSelector(state => state.transaction_reducer)

  const { setHandleBalance, handleBalance:{
    portafolio_balance, total_amount_invested
  }, reduceAmountDollar, profit, setProfit, handleProfitColor, setHandleProfitColor  } = useContext(DataContext)
  const myBalanceInvested = useFormatNumbers(reduceAmountDollar)
  const portafolioBalanceFormat = useFormatNumbers(portafolio_balance)


  const profitFormat = useFormatNumbers(profit)

  useEffect(() => {
    if(profit > 0) {
      setProfit(portafolio_balance - reduceAmountDollar)
      setHandleProfitColor(true)
    } else {
      setProfit(portafolio_balance - reduceAmountDollar)
      setHandleProfitColor(false)
      
    }
  }, [ portafolio_balance, profit ])

  const [cleanBalance, setCleanBalance] = useState(0);
  useEffect(() => {
    setHandleBalance({
      portafolio_balance: 0, total_amount_invested: 0 })
  }, [  ])

  return (
    <section className="portafolio">
      <div className="portafolio__main__section" >
        <div className={`portafolio__assets mg--v ${ intro }`} style={{ animationDelay: '.6s' }}>
          <div className={`${intro}`} >
            <h2 className="mg--v">Your Assets </h2>
            {
              total_amount_invested > 0 &&
              <div className='balances'>
                <h2>Balance: <span className="balance--color">$ { portafolioBalanceFormat }</span></h2>
                <h2>Total Invested: <span className="balance--color">$ { myBalanceInvested }</span></h2>
                <h2 >Profit: <span className={ handleProfitColor ? 'gainer--color' : 'loser--color' }>$ { profitFormat } { handleProfitColor ? icons.trending_up_icon : icons.trending_down_icon }</span></h2>
              </div>
            }
          </div>
          {
            dataAssets.length > 0
            ? <PortafolioTable />
            : <EmptyComponent message="You haven't bought any assets yet"/>
          }
        </div>
          <GainerLoser />
        <div className={`portafolio__wishlist mg--v ${ intro }`} style={{ animationDelay: '.9s' }}>
          <h2 className="mg--v">Wishlist</h2>
          {
            data.length > 0
            ? <WishlistTable data={ data }/>
            : <EmptyComponent message="You haven't added anything to your wishlist yet"/>
          
          }
        </div>

      </div>
      <aside className={`portafolio__aside c100 ${ intro }`} style={{ animationDelay: '1.5s' }}>
       {
         dataTransaction.length > 0 &&
         <div className={`portafolio__aside__content `}>
         <h2>Transaction history</h2>

           
           <AssetTransactions id=""/>

         </div>
       }
      </aside>
    </section>
  )
}
