import { types } from "../types/types";
import { randomId } from "../utils/functions/randomId";

const weekDays = [
  'Sun',
  'Mon',
  'Tues',
  'Wed',
  'Thurs',
  'Fri',
  'Sat',
];

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
]
export const transactionReducer = ( state = [], action ) => {
  
  // debugger
  
  switch ( action.type ) {
    case types.transaction_buy:

      const { handleAsset: {
        id, current_price, symbol, 
      }, previewTransaction: {
        amount_dollar, amount_crypto, fee, asset
      } } = action.payload
      // debugger
      const date = new Date();
      // debugger
      return [
        {
          // ...action.payload,
          id_asset: id,
          name: asset,
          price: current_price,  
          id: randomId(),
          date: {
            day: weekDays[date.getDay()],
            day_number: date.getDate(),
            month: months[date.getMonth()],
            hour: date.getHours(),
            min: date.getMinutes(),
            full_date: date
          },
          amount_bought: amount_dollar, 
          amount_asset: amount_crypto,
          transaction_type: 'Bought', 
          status: 'Complete',
          symbol
        },
        ...state, 
      ]

    case types.transaction_earn:
      const { data } = action.payload
      debugger
      // const date = new Date();
      // return [
      //   {
      //     // ...action.payload,
      //     id_asset: id,
      //     name: asset,
      //     price: current_price,  
      //     id: randomId(),
      //     date: {
      //       day: weekDays[date.getDay()],
      //       month: months[date.getMonth()],
      //       hour: date.getHours(),
      //       min: date.getMinutes(),
      //       full_date: date
      //     },
      //     amount_bought: amount_dollar, 
      //     amount_asset: amount_crypto,
      //     transaction_type: 'Bought', 
      //     status: 'Complete',
      //     symbol
      //   },
      //   ...state, 
      // ]

      case types.transaction_remove:
        return state.filter(item => item.id_asset !== action.payload)
    default:
      return state
  }
}