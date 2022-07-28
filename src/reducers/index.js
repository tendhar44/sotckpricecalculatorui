import symbolNameReducer from "./symbolName";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    symbolName: symbolNameReducer
});

export default allReducers;
