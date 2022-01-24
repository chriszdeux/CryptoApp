import { types } from "../types/types"

export const actionTotalBalance = ( data ) => {
  return {
    type: types.total_balance,
    payload: data
  }
}