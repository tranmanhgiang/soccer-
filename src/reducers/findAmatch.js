
import * as types from './../constants/actionTypes';
var initialState = [];

const fetchClubs = (state = initialState, action) => {
    switch(action.type) {
        case types.FETCH_CLUBS_MATCH : 
            state = action.clubs;
            return [...state];
        default: 
            return [...state];
    }
}

export default fetchClubs;