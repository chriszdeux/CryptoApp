import { types } from "../types/types";

const initialState = [{
  
}]
export const portafolioReducer = ( state = [  ], action ) => {
  // debugger
  switch (action.type) {
    case types.portafolio_buy:
      // debugger
      const newState = [...state];
      const filterState = newState.filter(item =>  item.id !== action.payload.id)
      const filterAsset = newState.filter(item => item.id === action.payload.id)

      // debugger
      if(filterAsset.length > 0) {
        // debugger
        return [ 
          { ...action.payload, 
            amount_dollar: Number(filterAsset[0].amount_dollar) +  Number(action.payload.amount_dollar), 
            amount_crypto:  Number(filterAsset[0].amount_crypto) +  Number(action.payload.amount_crypto) 
          }, ...filterState
        ]
          // debugger
        } 
        // else {
          
        //   debugger
        //   return [ 
        //     { ...action.payload, 
        //           amount_dollar: 
        //             (filterAsset[0].amount_dollar) +  action.payload.amount_dollar, 
        //           amount_crypto: 
        //             filterAsset[0].amount_crypto +  action.payload.amount_crypto 
        //     }, ...filterState
        //   ]
        // }
    // debugger
    return [{  ...action.payload, amount_crypto: action.payload.amount_crypto, amount_dollar: Number(action.payload.amount_dollar)} ,  ...state, ]

    case types.portafolio_buy_remove:
      return []
      // debugger
    
    case types.portafolio_remove_asset:
      return state.filter(item => item.id !== action.payload)
    default:
      return state
  }
}