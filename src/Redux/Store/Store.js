import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from "./../Slice/CartSlice/CartSlice.js"
import NewsReducer from "./../Slice/NewsSlice/NewsSlice.js"
import ProductsReducer from "./../Slice/ProductSlice/ProductSlice.js"
import SnackAlertReducer from "./../Slice/SnackAlertSlice/SnackAlertSlice.js"
import UserReducer from "./../Slice/UserSlice/UserSlice.js"
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
export const rootReducer = combineReducers({
    auth:UserReducer,
    cart: cartReducer,
    news:NewsReducer,
    products:ProductsReducer,
    snackAlert:SnackAlertReducer
})
  export const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'auth']
  };
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
})
export const persistor = persistStore(store)
