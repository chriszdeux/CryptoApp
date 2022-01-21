import { types } from "../types/types"

export const actionMainData = ( data ) => {
  return {
    type: types.main_data,
    payload: data
  }
}