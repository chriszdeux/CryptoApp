import React, { useContext } from 'react'
import { DataContext } from '../../context/context'

export const NftContract = () => {
  const { nft:{ data:{
    contract_address,
    token_id,
  } } } = useContext(DataContext)
  // debugger
  return (
    <ul className="nft__contract c95 pd">
      <li className="mg--b">Contract Address <span>{ contract_address }</span></li>
      <li className="mg--b">Token ID <span>{ token_id }</span></li>
      <li className="mg--b">BlockChain <span>Ethereum</span></li>
      <div className="glass"></div>
    </ul>
  )
}
