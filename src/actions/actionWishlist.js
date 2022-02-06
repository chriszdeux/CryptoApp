import { types } from "../types/types"

export const actionWishlist = ( data ) => {
  return {
    type: types.favorite_add,
    payload: data
  }
}

export const actionRemoveFromWishlist = ( data ) => {
  return {
    type: types.favorite_remove,
    payload: data
  }
}