import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../../store';
import BabySide from '../BabySide'
import * as babyActions from '../../actions/babies'
import * as eventsActions from '../../actions/events'
import * as selectors from '../../reducers'

const store = configureStore();
store.dispatch(babyActions.addBaby('1', 'Test1', 'Test2'));
store.dispatch(babyActions.addBaby('2', 'Test3', 'Test4'));
store.dispatch(babyActions.addBaby('3', 'Test4', 'Test5'));
store.dispatch(babyActions.selectBaby('1'));

store.dispatch(eventsActions.addEvent('1A', 'Test', 'Hoy', 'Testeando', '1'));
store.dispatch(eventsActions.addEvent('2A', 'Test', 'Hoy', 'Testeando', '1'));
store.dispatch(eventsActions.addEvent('3A', 'Test', 'Hoy', 'Testeando', '1'));

store.dispatch(eventsActions.addEvent('1E', 'Test', 'Hoy', 'Testeando', '2'));
store.dispatch(eventsActions.addEvent('2E', 'Test', 'Hoy', 'Testeando', '2'));
store.dispatch(eventsActions.addEvent('3E', 'Test', 'Hoy', 'Testeando', '2'));
console.log(selectors.getAllBabies(store.getState()));
console.log(store.getState());




const App = () => (
    <Provider store={store}>
        <BabySide/>
    </Provider>
);


export default App;