import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import {apiSlice} from "./api/apiSlice";
import questionReducer from "../services/questionApiSlice";

const reducer = combineReducers({
  question: questionReducer,
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
