import * as types from './../constants/actionTypes';

var InitialState = [];
const reports = (state = InitialState, action) => {
    switch(action.type) {
        case types.FETCH_REPORTS :
            state = action.reports;
            return [...state];
        default :
            return [...state];
    }
}

export default reports;