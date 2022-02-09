import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { DataContext } from '../../context/context'
import { animations_object } from '../../utils/animations/animations_object'
import { icons } from '../../utils/icons/icons_object'
import { Divider } from '../helpers/Divider'
import { TransactionItem } from './TransactionItem'

export const AssetTransactions = ({id}) => {

  const { intro } = animations_object;
  const [filterTransaction, setFilterTransaction] = useState([]);
  const dataTransaction = useSelector(state => state.transaction_reducer)
  // const [filterId, setFilterId] = useState(id);
  const { handleBalance } = useContext(DataContext)
  
  // useEffect(() => {
  //   setFilterTransaction( dataTransaction.filter( item => item.id === id ) )
  // }, [ id ])
  
  // debugger
  return (
    <div className={`asset__transactions ${ intro } c95`}>
      {/* <h2 className="pd">Transaction history  <span>{ id.length > 1 ? `Total balance: ${ handleBalance }` : `${ id }` }</span></h2> */}
      <ul className="asset__transaction__list">
        {
          filterTransaction.length > 0
            ? 
              filterTransaction.map(item => (
                <TransactionItem key={ item.id } item={ item }/>
              ))
            :  
              dataTransaction.map(item => (
                <TransactionItem key={ item.id } item={ item }/>
              ))
            
        }
        {/* <Divider /> */}
      </ul>
    </div>
  )
}
