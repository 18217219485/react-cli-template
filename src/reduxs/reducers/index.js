/**
 * @file
 */
import {combineReducers} from 'redux';
import todo from './todo';
import thrunk from './thrunk';
export default combineReducers({
    todo,
    thrunk
});
