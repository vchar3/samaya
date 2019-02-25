import { CONSENTS_SENDING, CONSENTS_SENDING_SUCCESS, CONSENTS_SENDING_FAILURE} from '../constants';
import { baseURL } from '../apiUrlConfig';


export function getListOfConsent(userId) {
    return (dispatch) => {
        dispatch(sendConsentData(userId));

        baseURL.get('consent',{
            params: {
                userId: userId
            }
        })
        .then(res => dispatch(sendConsentSuccess(res)))    
        .catch(err => {
            dispatch(sendConsentFailure(err));
            console.log("API Failure",err);
        });
    }
};

export function updateConsentRecord(recordData) {
    return (dispatch) => {

        baseURL.post('updateConsent', 
            {
                record: recordData
            }
        )
        .then(res => dispatch(sendConsentSuccess(res)))    
        .catch(err => {
            dispatch(sendConsentFailure(err));
            console.log("API Failure",err);
        });
    }
}




function sendConsentData(consentData) {
    return {
        type: CONSENTS_SENDING,
        data: consentData
    }
}

function sendConsentSuccess(consentData) {
    return {
        type: CONSENTS_SENDING_SUCCESS,
        consentData
    }
}

function sendConsentFailure(error) {
    return {
        type: CONSENTS_SENDING_FAILURE,
        error
    }
}