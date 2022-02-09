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
        if(typeof(filterAsset[0].amount_crypto) === 'string' && typeof(filterAsset[0].amount_dollar) === 'string' ) {
          // debugger
          return [ 
            { ...action.payload, 
              amount_dollar: 
              Number( filterAsset[0].amount_dollar?.replace(/\,/g, '') ) + Number( action.payload.amount_dollar?.replace(/\,/g, '') ), 
              amount_crypto: 
              Number( filterAsset[0].amount_crypto?.replace(/\,/g, '') ) + Number( action.payload.amount_crypto?.replace(/\,/g, '') ) 
            }, ...filterState
          ]
        } else {
          
          // debugger
          return [ 
          { ...action.payload, 
                amount_dollar: 
                  Number( filterAsset[0].amount_dollar ) + Number( action.payload.amount_dollar ), 
                amount_crypto: 
                  Number( filterAsset[0].amount_crypto ) + Number( action.payload.amount_crypto ) 
          }, ...filterState
      ]
        }
      }
    // debugger

      return [{  ...action.payload, amount_crypto: action.payload.amount_crypto?.replace(/\,/g, '') },  ...state, ]

    case types.portafolio_earn:
      // debugger

    default:
      return state
  }
}