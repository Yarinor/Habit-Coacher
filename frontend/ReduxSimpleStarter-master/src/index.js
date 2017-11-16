import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch } from 'react-router-dom'



import reducers from './reducers';
import signupForm from './components/signup_form'
import loginForm from './components/login_form'


const createStoreWithMiddleware = applyMiddleware()(createStore);
ReactDOM.render(

    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                <Route path="/signup" component={signupForm}/>
                <Route path="/login" component={loginForm}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));
