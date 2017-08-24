import { combineReducers } from 'redux';
import authReducer from './authReducer';
import projReducer from './projReducer';

// Whatever keys we provide to our object will represnt
// the keys we provide to our state object
export default combineReducers({
    auth: authReducer,
    projects: projReducer,
});