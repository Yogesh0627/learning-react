import { legacy_createStore } from "redux";
import CounterReducer from "./counter/CounterReducer";

// const intialState = {
//     counter:1,
// }
const intialState = 0
const store =legacy_createStore(CounterReducer,intialState)

export default store