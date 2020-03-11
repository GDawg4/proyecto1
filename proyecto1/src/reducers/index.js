import babyReducers from "./babies";
import eventsReducers from "./events";
import {combineReducers} from "redux";

const reducer = combineReducers({
    babyReducers,
    eventsReducers
});

export default reducer