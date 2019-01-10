import { MEDICATION_SENDING, MEDICATION_SENDING_SUCCESS, MEDICATION_SENDING_FAILURE} from '../constants';
import { baseURL } from '../apiUrlConfig';


export function getMedicationList(userId) {
    return (dispatch) => {
        dispatch(sendMedicationData(userId));
        console.log('get medication', userId);
        baseURL.get('medication',{
            params: {
                userId: userId
            }
        })
        .then(res => dispatch(sendMedicationSuccess(res)))    
        .catch(err => {
            dispatch(sendMedicationFailure(err));
            console.log("Meication API Failure",err);
        });
    }
};

export function addMedication(medicationDetail) {
    return (dispatch) => {
        dispatch(sendMedicationData(medicationDetail));

        baseURL.post('addMedication', medicationDetail)
        .then(res => dispatch(sendMedicationSuccess(res)))
        .catch(err =>  { 
            dispatch(sendMedicationFailure(err));
            console.log("API Failure",err);
        })
    }
};

export function medicationSchedule(userId) {
    return (dispatch) => {
        dispatch(sendMedicationData(userId));

        baseURL.get('getMedicationSchedule', {
            params: {
                userid: userId
            }
        })
        .then(res => dispatch(sendMedicationSuccess(res)))    
        .catch(err => {
            dispatch(sendMedicationFailure(err));
            console.log("medicationSchedule Failure",err);
        });
    }
}


function sendMedicationData(medicationData) {
    return {
        type: MEDICATION_SENDING,
        data: medicationData
    }
}

function sendMedicationSuccess(medicationData) {
    return {
        type: MEDICATION_SENDING_SUCCESS,
        medicationData
    }
}

function sendMedicationFailure(error) {
    return {
        type: MEDICATION_SENDING_FAILURE,
        error
    }
}