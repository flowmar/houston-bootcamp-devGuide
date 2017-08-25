import { FETCH_PROJECTS, FETCH_INSTALLATION, FETCH_DEPLOYMENT} from '../actions/types';
// Records whether or not the user is logged in 
// returns the User model back to the component (Navbar) or
// returns false if the user is not logged in or
// returns null (default value) if we really don't know if the user is logged in
export default function(state = [], action) {
    console.log("action--authReducer", action);
    switch(action.type) {
        case FETCH_PROJECTS:
            return action.payload;
        case FETCH_INSTALLATION:
            return action.payload;
        case FETCH_DEPLOYMENT:
            return action.payload;
        default:
            return state;
    }
}