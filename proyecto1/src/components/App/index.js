import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import { Provider } from 'react-redux';
import { configureStore } from '../../store';
import MainScreen from "../MainScreen";
import AddBaby from "../AddBaby";


const store = configureStore();

const App = () => (
    <Provider store={store}>
        <Router history = {history}>
            <Redirect from='' to='addBaby'/>
            <Switch>
                {/*<Redirect exact from='' to='/addBaby '/>*/}
                <Route path='/addBaby'>
                    <AddBaby/>
                </Route>
            </Switch>
            <Switch>
                <Route path='/allBabies'>
                    <MainScreen/>
                </Route>
            </Switch>
        </Router>
       {/* <AddBaby/>*/}
    </Provider>
);


export default App;