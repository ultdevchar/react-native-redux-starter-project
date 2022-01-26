// Created to manage user screen permission changing...

// Import action...
import { ADD_SCREEN_ACCESS, REMOVE_SCREEN_ACCESS } from "../actions/ActionScreenAccess";

// Define initial state...
const initialState = {

    // Define list to keep screen name...
    screenAccessList: []
};

// Define reducer to handle action behaviours...
const ReducerScreenAccess = (state = initialState, action) => {

    // Define control blocks for different action types...
    switch(action.type) {
        case ADD_SCREEN_ACCESS:

            // Control screenName added before or not?...
            if(state.screenAccessList.find(screenName => {return screenName === action.screenName;}) == null){

                return {...state, screenAccessList: state.screenAccessList.concat(action.screenName)};
            }
            else{

                return state;
            }
            
        case REMOVE_SCREEN_ACCESS:
            return {...state, screenAccessList: state.screenAccessList.filter(screenName => screenName !== action.screenName)};
        default:
            return state;
    }
};

export default ReducerScreenAccess;