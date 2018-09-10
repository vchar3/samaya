import { combineReducers } from 'redux';

import nav from './navReducer';
import auth from './authReducer';
import userReducer from './userReducer';

const rootReducers = combineReducers({
    nav,
    auth,
    userReducer
});

export default rootReducers;