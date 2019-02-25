import { DATA_SENDING, DATA_SENDING_SUCCESS, DATA_SENDING_FAILURE} from '../constants';
import { NavigationActions } from 'react-navigation';
import {SwitchNavigator } from '../../src/navigators/AppNavigator';

const initialState = {
    data: [],
    isLoading: false,
    error: ''
}

export default function addUserReducer(state = initialState, action) {
    switch(action.type) {
        case DATA_SENDING:
            return {
                ...state,
                isLoading: true,
                data: action.data
            }
        case DATA_SENDING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.data,
            }
        case DATA_SENDING_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default: 
            return state
    }
}