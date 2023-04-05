import { createStore } from "redux";
import todoReducer from "./reducer1";

const store1 = createStore(todoReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store1