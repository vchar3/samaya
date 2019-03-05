import {
    MEDICATION_SENDING,
    MEDICATION_SENDING_SUCCESS,
    MEDICATION_SENDING_FAILURE
} from '../constants';

const initialState = {
    data: [],
    isLoading: false,
    error: ''
}

export default function medicationReducer(state = initialState, action) {
    switch (action.type) {
        case MEDICATION_SENDING:
            return {
                ...state,
                isLoading: true,
                data: action.data
            }
        case MEDICATION_SENDING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                medicationData: action.medicationData,
            }
        case MEDICATION_SENDING_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state
    }
}