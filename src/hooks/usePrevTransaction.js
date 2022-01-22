import { useEffect, useState } from "react/cjs/react.development"

export const usePrevTransactions = (  ) => {
  const [previewTransaction, setPreviewTransaction] = useState({  });
  const handlePrevTransaction = ( asset, amount_crypto, amount_dollar ) => {
    // debugger
    // const fees = [0.03, 0.05, 0.06, 0.09, 0.10 ]
    // const randomFee = Math.floor(Math.random() * fees.length) + 1
    setPreviewTransaction({
      asset: asset,
      amount_crypto: amount_crypto,
      amount_dollar: amount_dollar,
      fee: amount_dollar * 0.05,
      // asset_price: price 
    })
    
  }
  
  // const [total, setTotal] = useState();
  // debugger
  return {
    previewTransaction, handlePrevTransaction
  }
}