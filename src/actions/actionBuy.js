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

export const actionRemoveBuy = (  ) => {
  // debugger
  return {
    type: types.portafolio_buy_remove,
    payload: []
  }
}

export const actionRemoveAsset = ( data ) => {
  // debugger
  return {
    type: types.portafolio_remove_asset,
    payload: data
  }
}

