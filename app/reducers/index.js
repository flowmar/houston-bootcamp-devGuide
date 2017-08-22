import { combineReducers } from 'redux';
import authReducer from './authReducer';


// Whatever keys we provide to our object will represnt
// the keys we provide to our state object
export default combineReducers({
    auth: authReducer
});