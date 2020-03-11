import {combineReducers} from "redux";
import omit from "lodash/omit";
import * as types from "../types/events";
import isNil from "lodash/isNil";
import filter from "lodash/filter";


const byId = (state = {}, action) => {
    switch (action.type) {
        case (types.EVENT_ADDED):{
            return {
                ...state,
                [action.payload.id] : action.payload
            }
        }
        case (types.EVENT_DELETED):{
            return omit(state, action.payload.event)
        }
        default:{
            return state
        }
    }
};

const byBabyId = (state = {}, action) =>{
    switch (action.type) {
        case (types.EVENT_ADDED):{
            if (isNil(state[action.payload.baby])){
                return {
                    ...state,
                    [action.payload.baby]: [action.payload.id]
                }
            }
            return {
                ...state,
                [action.payload.baby]: [...state[action.payload.baby], action.payload.id]
            }
        }
        case (types.EVENT_DELETED):{
            return {
                ...state,
                [action.payload.baby]:filter(state[action.payload.baby], function (item){return item === action.payload.event})
            }
        }
        default:{
            return state
        }
    }
};

const eventsReducers = combineReducers({
    byId,
    byBabyId
});

export default eventsReducers;