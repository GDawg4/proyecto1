import {combineReducers} from "redux";

import * as types from "../types/babies";
import {default} from "react-redux/lib/utils/Subscription";

const order = (state = [], action) =>{
    switch (action.type){
        case types.BABY_ADDED:{
            return [...state, action.payload.id];
        }
        default:{
            return state;
        }
    }
};

const byId = (state = {}, action) =>{
    switch (action.type) {
        case types.BABY_ADDED:{
            return {
                ...state,
                [action.payload]:action.payload,
            }
        }
        default:{
            return state
        }
    }
};

const selectedBaby = (state = null, action) =>{
    switch (action.type) {
        case types.BABY_SELECTED:{
            return action.payload.id
        }
        default:{
            return state
        }
    }
};

const babyReducer = combineReducers(
    {
        order,
        byId,
        selectedBaby,
    }
);

export default babyReducer;