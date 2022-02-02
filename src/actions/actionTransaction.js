import { types } from "../types/types"

export const actionTransaction = ( data ) => {
  return {
    type: types.transaction_buy,
    payload: data
  }
}

export const actionTransactionEarn = ( data ) => {
  return {
    type: types.transaction_earn,
    payload: data
  }
}