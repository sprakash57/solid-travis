import { combineReducers } from 'redux';
import user from './user';
import workflow from './workflow';

export default combineReducers({
    user,
    workflow
})
