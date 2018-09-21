import { DATA_FETCHING, DATA_FETCHING_SUCCESS, DATA_FETCHING_FAILURE} from '../constants';
import { NavigationActions } from 'react-navigation';
import {SwitchNavigator } from '../../src/navigators/AppNavigator';

const initialState = {
    data: [],
    isLoading: false,
    error: ''
}

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case DATA_FETCHING:
            return {
                ...state,
                isLoading: true,
                data: []
            }
        case DATA_FETCHING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.data,
            }
        case DATA_FETCHING_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default: 
            return state
    }
}