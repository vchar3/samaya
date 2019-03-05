import {
    CONSENTS_SENDING,
    CONSENTS_SENDING_SUCCESS,
    CONSENTS_SENDING_FAILURE
} from '../constants';

const initialState = {
    data: [],
    isLoading: false,
    error: ''
}

export default function consentsReducer(state = initialState, action) {
    switch (action.type) {
        case CONSENTS_SENDING:
            return {
                ...state,
                isLoading: true,
                data: action.data
            }
        case CONSENTS_SENDING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                consentData: action.consentData,
            }
        case CONSENTS_SENDING_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state
    }
}