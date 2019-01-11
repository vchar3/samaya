import { SCHEDULE_SENDING, SCHEDULE_SENDING_SUCCESS, SCHEDULE_SENDING_FAILURE} from '../constants';

const initialState = {
    data: [],
    isLoading: false,
    error: ''
}

export default function scheduleReducer(state = initialState, action) {
    switch(action.type) {
        case SCHEDULE_SENDING:
            return {
                ...state,
                isLoading: true,
                data: action.data
            }
        case SCHEDULE_SENDING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                scheduleData: action.scheduleData,
            }
        case SCHEDULE_SENDING_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default: 
            return state
    }
}


