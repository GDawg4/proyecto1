import {combineReducers} from "redux";

import * as types from "../types/babies";

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
                [action.payload.id]:action.payload,
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
            return action.payload.index
        }
        default:{
            return state
        }
    }
};

const babyReducers = combineReducers(
    {
        order,
        byId,
        selectedBaby,
    }
);

export const getBaby = (state, id) => state.byId[id];
export const getAllBabies = state => state['order'];
export const getSelectedBaby = state => state.selectedBaby;
export default babyReducers;