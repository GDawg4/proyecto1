import babyReducers, * as babySelectors from "./babies";
import eventsReducers, * as eventsSelectors from "./events";
import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form'

const reducer = combineReducers({
    babyReducers,
    eventsReducers,
    form:formReducer,
});


export const getBaby = (state, id) => babySelectors.getBaby(state.babyReducers, id);
export const getAllBabies = (state) => babySelectors.getAllBabies(state.babyReducers);
export const getSelectedBaby = state => babySelectors.getSelectedBaby(state.babyReducers);
export const getEventsFromBaby = (state, id) => eventsSelectors.getEventsFromBaby(state.eventsReducers, id);
export const getEventById = (state, id) => eventsSelectors.getEventFromId(state.eventsReducers, id);
export const getForm = (state) => (state.form);
export default reducer