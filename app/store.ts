import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import {apiSlice} from "./api/apiSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";


const reducer = combineReducers({
  // cart: cartReducer,
  // auth: authReducer,
  // menu: menuReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export const store = configureStore({
  reducer: reducer,
  // reducer: reducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
  }).concat(apiSlice.middleware),
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);
