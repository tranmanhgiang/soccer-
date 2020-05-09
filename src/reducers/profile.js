import * as types from './../constants/actionTypes';

var InitialState = [];

const profile = (state = InitialState, action) => {
    switch(action.type) {
        case types.FETCH_PROFILE :
            state = action.users;
            return [...state];
        default : 
            return [...state];
    }
}

export default profile;