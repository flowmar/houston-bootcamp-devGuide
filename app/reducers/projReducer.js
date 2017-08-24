import { FETCH_WORKFLOW, FETCH_INSTALLATION } from '../actions/types';

// Records whether or not the user is logged in 
// returns the User model back to the component (Navbar) or
// returns false if the user is not logged in or
// returns null (default value) if we really don't know if the user is logged in
export default function(state = [], action) {
    switch(action.type) {
        case FETCH_WORKFLOW:
            return action.payload;
        case FETCH_INSTALLATION:
            return action.payload;
        default:
            return state;
    }
}