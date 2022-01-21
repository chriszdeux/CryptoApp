import { types } from "../types/types"

const initialState = {
  loading: true,
  data: [],
  error: null
}

export const mainDataReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case types.main_data:
      return {...action.payload}
    default:
      return state
  }
}