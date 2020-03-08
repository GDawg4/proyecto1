import * as types from "../types/events";

export const addEvent = (id, type, date, notes, baby) =>({
    type: types.EVENT_ADDED,
    payload:{id, type, date, notes, baby},
});

export const deleteEvent = (baby, index) => ({
    type:types.EVENT_DELETED,
    payload:{baby, index}
});