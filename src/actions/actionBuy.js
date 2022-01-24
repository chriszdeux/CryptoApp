import { types } from "../types/types"

export const actionBuy = ( data ) => {
  // debugger
  return {
    type: types.portafolio_buy,
    payload: data
  }
}