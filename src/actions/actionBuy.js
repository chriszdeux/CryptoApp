import { types } from "../types/types"

export const actionBuy = ( data ) => {
  // debugger
  return {
    type: types.portafolio_buy,
    payload: data
  }
}


export const actionEarn = ( data ) => {
  // debugger
  return {
    type: types.portafolio_earn,
    payload: data
  }
}