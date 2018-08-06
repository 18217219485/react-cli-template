/**
 * @file reducers 的index文件
 */
import {combineReducers} from 'redux';
import todo from './todo';
import visibilityFilter from './visibilityFilter';
export default combineReducers({
    todo,
    visibilityFilter
});
