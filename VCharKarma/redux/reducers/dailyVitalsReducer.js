import { VITALS_SENDING, VITALS_SENDING_SUCCESS, VITALS_SENDING_FAILURE} from '../constants';

const initialState = {
    data: [],
    isLoading: false,
    error: ''
}

export default function dailyVitalsReducer(state = initialState, action) {
    switch(action.type) {
        case VITALS_SENDING:
            return {
                ...state,
                isLoading: true,
                data: action.data
            }
        case VITALS_SENDING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                vitalsData: action.vitalsData,
            }
        case VITALS_SENDING_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default: 
            return state
    }
}
