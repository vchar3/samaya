import {  SCHEDULE_SENDING,  SCHEDULE_SENDING_SUCCESS,  SCHEDULE_SENDING_FAILURE} from '../constants';
import { baseURL } from '../apiUrlConfig';

export function medicationSchedule(userId) {
    return (dispatch) => {
        dispatch(sendScheduleData(userId));

        baseURL.get('getMedicationSchedule', {
            params: {
                userid: userId
            }
        })
        .then(res => dispatch(sendScheduleSuccess(res)))    
        .catch(err => {
            dispatch(sendScheduleFailure(err));
            console.log("schedule Failure",err);
        });
    }
}


function sendScheduleData(scheduleData) {
    return {
        type: SCHEDULE_SENDING,
        data: scheduleData
    }
}

function sendScheduleSuccess(scheduleData) {
    return {
        type: SCHEDULE_SENDING_SUCCESS,
        scheduleData
    }
}

function sendScheduleFailure(error) {
    return {
        type: SCHEDULE_SENDING_FAILURE,
        error
    }
}
