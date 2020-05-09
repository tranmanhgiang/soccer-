import * as types from './../constants/actionTypes';
import callApi from '../utils/apiCaller';

export const fetchReportsRequest = () => {
    return (dispatch) => {
        return callApi('reports','GET',null).then(res => {
            dispatch(fetchReports(res.data));
        })
    }
}

export const fetchReports = (reports) => {
    return {
        type : types.FETCH_REPORTS,
        reports
    }
}