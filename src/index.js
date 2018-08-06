/**
 * 项目的主入口文件
 */
import React from 'react';
import {render} from 'react-dom';
import App from './App.jsx';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './redux/reducers';
let store = createStore(reducers);
render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
