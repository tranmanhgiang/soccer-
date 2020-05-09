import * as types from './../constants/actionTypes';
const InitialState = [];

const clubs = (state = InitialState, action) => {
    switch(action.type) {
        case types.FETCH_ALL_CLUBS :
            state = action.clubs;
            return [...state];
        default : 
            return [...state];
    }
}

export default clubs;