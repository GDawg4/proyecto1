import uniqid from 'uniqid'
import moment from "moment";
export const actionTypes = ['Siesta', 'Pacha', 'Pecho', 'Popo', 'Pipi'];

export const createID = () => uniqid();

export const getDate = () => moment().format('MMMM Do YYYY, h:mm:ss a');