import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../../store';
import MainScreen from "../MainScreen";


const store = configureStore();

const App = () => (
    <Provider store={store}>
        <MainScreen/>
    </Provider>
);


export default App;