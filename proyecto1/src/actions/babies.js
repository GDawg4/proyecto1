import * as types from "../types/babies";

export const addBaby = (id, firstName, lastName) =>({
    type: types.BABY_ADDED,
    payload:{id, firstName, lastName},
});

export const selectBaby = (index) =>({
   type: types.BABY_SELECTED,
   payload:{index}
});