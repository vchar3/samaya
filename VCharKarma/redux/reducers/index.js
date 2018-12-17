import { combineReducers } from 'redux';
import { USER_LOGOUT} from '../constants';

import nav from './navReducer';
import auth from './authReducer';
import userReducer from './userReducer';
import addUserReducer from './addUserReducer';
import consentsReducer from './consentsReducer';
import medicationReducer from './medicationReducer';

const appReducers = combineReducers({
    nav,
    auth,
    userReducer,
    addUserReducer,
    consentsReducer,
    medicationReducer
});

const rootReducers = (state, action) => {
    if (action.type === USER_LOGOUT) {
      state = undefined
    }
  
    return appReducers(state, action)
  }

export default rootReducers;