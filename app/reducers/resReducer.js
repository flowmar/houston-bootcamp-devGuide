import { FETCH_RESPONSE } from '../actions/types';
// Records whether or not the user is logged in 
// returns the User model back to the component (Navbar) or
// returns false if the user is not logged in or
// returns null (default value) if we really don't know if the user is logged in
export default function(state = null, action) {
    //console.log("action--authReducer", action);

    switch(action.type) {
        case FETCH_RESPONSE:
            return action.payload || false;
        default:
            return state;
    }
}