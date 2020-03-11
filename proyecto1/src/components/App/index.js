import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../../store';
import * as babyActions from "../../actions/babies"
import * as eventActions from "../../actions/events"


const store = configureStore();
console.log(store.getState());
/*store.dispatch(babyActions.addBaby("1E", "Rodrigo", "Garoz"));
console.log(store.getState());*/
store.dispatch(eventActions.addEvent("1E", "Something", "today", "Test", 1));
console.log(store.getState());
store.dispatch(eventActions.addEvent("2E", "Something", "today", "Test", 1));
console.log(store.getState());
store.dispatch(eventActions.deleteEvent(1, "2E"));
console.log(store.getState());
/*store.dispatch(eventActions.addEvent("3E", "Something", "today", "Test", 2));
console.log(store.getState());*/

const App = () => (
    <Provider store={store}>
    </Provider>
);


export default App;