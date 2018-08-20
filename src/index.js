/**
 * 项目的主入口文件
 */
import React from 'react';
import {render} from 'react-dom';
import App from './App.jsx';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reduxs/reducers';
import thunk from 'redux-thunk';

// let store = createStore(reducers);
const store = createStore(reducers, applyMiddleware(thunk));
render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
