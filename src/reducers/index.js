import { combineReducers } from 'redux';
import fetchClubs from './findAmatch';
import clubs from './clubLists';
import reports from './reports';
import profile from './profile';

const myReducers = combineReducers({
    fetchClubs,
    clubs,
    reports,
    profile
});

export default myReducers;
