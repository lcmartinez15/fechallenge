import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from "redux";
import busqueda from "./reducers/busqueda";

const reducer = combineReducers({
  busqueda
});
const store = configureStore({
  reducer,
  // middleware: [
  //   ...getDefaultMiddleware({ immutableCheck: false, serializableCheck: false })
  // ]
});
export default store;
