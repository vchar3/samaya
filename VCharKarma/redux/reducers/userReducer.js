import { DATA_FETCHING, DATA_FETCHING_SUCCESS, DATA_FETCHING_FAILURE} from '../constants';

const initialState = {
    data: [],
    isLoading: false,
    error: false
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
                data: action.data
            }
        case DATA_FETCHING_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true
            }
        default: 
            return state
    }
}