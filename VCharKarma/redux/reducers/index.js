import { combineReducers } from 'redux';
import { USER_LOGOUT} from '../constants';

import nav from './navReducer';
import auth from './authReducer';
import userReducer from './userReducer';
import addUserReducer from './addUserReducer'

const appReducers = combineReducers({
    nav,
    auth,
    userReducer,
    addUserReducer
});

const rootReducers = (state, action) => {
    if (action.type === USER_LOGOUT) {
      state = undefined
    }
  
    return appReducers(state, action)
  }

export default rootReducers;