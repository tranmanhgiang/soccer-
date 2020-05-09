import * as types from './../constants/actionTypes';
import callApi from './../utils/apiCaller';

export const fetchAllClubsRequest = () => {
    return (dispatch) => {
        return  callApi('clubs','GET',null).then(res => {
                    dispatch(fetchAllClubs(res.data))
                })
    }
}

export const fetchAllClubs = (clubs) => {
    return {
        type : types.FETCH_ALL_CLUBS,
        clubs
    }
}