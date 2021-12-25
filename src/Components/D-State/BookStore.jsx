import { createStore, combineReducers } from "redux";
import { BookReducer } from "../C-Reducer/BookReducer";
export const BookStore = () => {
  const mystore = createStore(
    combineReducers({BookReducer}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return mystore;
};
