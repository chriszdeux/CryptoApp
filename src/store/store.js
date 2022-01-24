import { applyMiddleware, combineReducers, createStore } from "redux";
import { usePagination } from "../hooks/usePagination";
import { wishlistReducer } from "../reducers/wishlistReducer";
import { mainDataReducer } from "../reducers/mainDataReducer";
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { portafolioReducer } from "../reducers/portafolioReducer";
import { balanceReducer } from "../reducers/balanceReducer";
import { transactionReducer } from "../reducers/transactionReducer";


const persistConfig = {
  key: 'main-root',
  storage
  
}


const reducers = combineReducers({
  wishlist_reducer: wishlistReducer,
  data_reducer: mainDataReducer,
  buy_asset_reducer: portafolioReducer,
  balance_reducer: balanceReducer,
  transaction_reducer: transactionReducer,
});
const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  // applyMiddleware
  )

export const persist_store = persistStore(store)