// Define action names...
export const ADD_SCREEN_ACCESS = 'ADD_SCREEN_ACCESS';
export const REMOVE_SCREEN_ACCESS = 'REMOVE_SCREEN_ACCESS';

// Define action function to return action object...
export const addScreenAccess = (name) => {
    return {type: ADD_SCREEN_ACCESS, screenName: name};
};

export const removeScreenAccess = (name) => {
    return {type: REMOVE_SCREEN_ACCESS, screenName: name};
};