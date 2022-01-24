import { types } from "../types/types";

const initialState = {
  total_balance: 0,
  total_amount_invested: 0,
}
export const balanceReducer = ( state=initialState, action ) => {
  // debugger
  switch (action.type) {
    case types.total_balance:
      // debugger
      // if(action.payload.balance > 0) {
        const newState = {
          total_balance: state.total_balance + Number(action.payload.balance),
        total_amount_invested: state.total_amount_invested + Number(action.payload.amount_dollar)  
      }
        // debugger
      return newState

    default:
      return state
  }
}