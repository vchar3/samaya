import { DATA_SENDING, DATA_SENDING_SUCCESS, DATA_SENDING_FAILURE} from '../constants';
import { baseURL } from '../apiUrlConfig';

export function fetchDataFromAPI() {
    return (dispatch) => {
        dispatch(getData())
         fetch('')
            .then(res => res.json())
            .then(json => dispatch(getDataSuccess(json.results)))
            .catch(err => dispatch(getDataFailure(err)))
    }
};

export function getAccountList(userId) {
    return (dispatch) => {
        console.log('base url : ', baseURL)
        dispatch(getData())
        baseURL.post('account', {
            userId: userId
          }).then(res => dispatch(getDataSuccess(res)))
            .catch(err => {dispatch(getDataFailure(err))
                            console.log("API Failure",err)
                            })
    }
};

export function addUser(userDetail) {
    return (dispatch) => {
        console.log('base url : ', baseURL)
        console.log('userDetail : ', userDetail)
        dispatch(sendData(userDetail))
        baseURL.post('addUser', {
            userDetail: userDetail
        }).then(res => dispatch(sendDataSuccess(res)))
            .catch(err =>  { dispatch(sendDataFailure(err))
                            console.log("API Failure",err)
                            })
    }
};

function sendData(userDetail) {
    return {
        type: DATA_SENDING,
        data: userDetail
    }
}

function sendDataSuccess(data) {
    return {
        type: DATA_SENDING_SUCCESS,
        data
    }
}

function sendDataFailure(error) {
    return {
        type: DATA_SENDING_FAILURE,
        error
    }
}