import {  VITALS_SENDING,  VITALS_SENDING_SUCCESS,  VITALS_SENDING_FAILURE} from '../constants';
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

export function addBath(bathData) {
    return (dispatch) => {
        dispatch(sendVitalsData(bathData));
        baseURL.post('dailyVitals', bathData)
        .then(res => dispatch(sendVitalsSuccess(res)))    
        .catch(err => {
            dispatch(sendVitalsFailure(err));
            console.log("API Failure",err);
        });
    }
}

export function addBloodPressure(bloodPressureData) {
    return (dispatch) => {
        dispatch(sendVitalsData(bloodPressureData));
        baseURL.post('dailyVitals', bloodPressureData)
        .then(res => dispatch(sendVitalsSuccess(res)))    
        .catch(err => {
            dispatch(sendVitalsFailure(err));
            console.log("API Failure",err);
        });
    }
}

export function addFall(fallData) {
    return (dispatch) => {
        dispatch(sendVitalsData(fallData));
        baseURL.post('dailyVitals', fallData)
        .then(res => dispatch(sendVitalsSuccess(res)))    
        .catch(err => {
            dispatch(sendVitalsFailure(err));
            console.log("API Failure",err);
        });
    }
}

export function addFeeling(feelingData) {
    return (dispatch) => {
        dispatch(sendVitalsData(feelingData));
        baseURL.post('dailyVitals', feelingData)
        .then(res => dispatch(sendVitalsSuccess(res)))    
        .catch(err => {
            dispatch(sendVitalsFailure(err));
            console.log("API Failure",err);
        });
    }
}

export function addNutrition(nutritionData) {
    return (dispatch) => {
        dispatch(sendVitalsData(nutritionData));
        baseURL.post('dailyVitals', nutritionData)
        .then(res => dispatch(sendVitalsSuccess(res)))    
        .catch(err => {
            dispatch(sendVitalsFailure(err));
            console.log("API Failure",err);
        });
    }
}

export function addOtherVitals(otherData) {
    return (dispatch) => {
        dispatch(sendVitalsData(otherData));
        baseURL.post('dailyVitals', otherData)
        .then(res => dispatch(sendVitalsSuccess(res)))    
        .catch(err => {
            dispatch(sendVitalsFailure(err));
            console.log("API Failure",err);
        });
    }
}



function sendVitalsData(vitalsData) {
    return {
        type: VITALS_SENDING,
        data: vitalsData
    }
}

function sendVitalsSuccess(vitalsData) {
    return {
        type: VITALS_SENDING_SUCCESS,
        vitalsData
    }
}

function sendVitalsFailure(error) {
    return {
        type: VITALS_SENDING_FAILURE,
        error
    }
}