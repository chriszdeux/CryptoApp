import { types } from "../types/types";

export const wishlistReducer = ( state=[  ],  action ) => {
  switch (action.type) {
    case types.favorite_add:
      if(state.find(item => item.id === action.payload.id)) {
        
        // debugger
        return state
      } 
      return [{...action.payload, favorite: true}, ...state] 
  
    case types.favorite_remove:
      // debugger
      return state.filter(item => {
        return item.id !== action.payload
      })

      default:
        return state
  }
}