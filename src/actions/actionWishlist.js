import { types } from "../types/types"

export const actionWishlist = ( data ) => {
  return {
    type: types.favorite_add,
    payload: data
  }
}