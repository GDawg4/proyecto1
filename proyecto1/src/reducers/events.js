import {combineReducers} from "redux";
import omit from "lodash/omit";
import * as types from "../types/events";

const byId = (state = {}, action) => {
    switch (action.type) {
        case (types.EVENT_ADDED):{
            return {
                ...state,
                [action.payload.id]:action.payload
            }
        }
        case(types.EVENT_DELETED):{
            return _.omit(state, action.payload.index)
        }
        default:{
            return state
        }
    }
};

const byBabyId = (state = {}, action) =>{
    switch (action.type) {
        case (types.EVENT_ADDED):{
            return {
                ...state,
                [action.payload.baby]:[...action.payload.baby, action.payload.id],
            }
        }
        case (types.EVENT_DELETED):{
            return {
                ...state,
                [action.payload.baby]:_.omit(action.payload.baby,action.payload.index)
            }
        }
        default:{
            return state
        }
    }
};