import * as types from './../constants/actionTypes';
import callApi from './../utils/apiCaller';


export const fetchClubsRequest = () => {
    return (dispatch) => {
        return  callApi('findamatch','GET',null).then(res => {
                    dispatch(fetchClubs(res.data));
                })
    }
}

export const fetchClubs = (clubs) => {
    return {
        type : types.FETCH_CLUBS_MATCH,
        clubs
    }
}