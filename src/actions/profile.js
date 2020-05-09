import * as types from './../constants/actionTypes';
import callApi from '../utils/apiCaller';

var myprofile = JSON.parse(localStorage.getItem('user'));

export const fetchProfileRequest = () => {
    return (dispatch) => {
        return callApi(`users/${myprofile[0].u_email}`,'GET',null).then(res => {
            dispatch(fetchProfile(res.data));
        })
    }
}
export const fetchProfile = (users) => {
    return {
        type : types.FETCH_PROFILE,
        users
    }
}