import { combineReducers } from 'redux';

import nav from './navReducer';
import auth from './authReducer';
import userReducer from './userReducer';
import addUserReducer from './addUserReducer'

const rootReducers = combineReducers({
    nav,
    auth,
    userReducer,
    addUserReducer
});

export default rootReducers;