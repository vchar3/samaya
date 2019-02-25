import { DATA_SENDING, DATA_SENDING_SUCCESS, DATA_SENDING_FAILURE} from '../constants';
import { baseURL } from '../apiUrlConfig';

export function getAccountList(userId) {
    return (dispatch) => {
        dispatch(sendData(userId));
        baseURL.post('account', {
            userId: userId
        })
        .then(res => dispatch(sendDataSuccess(res)))
        .catch(err => {
            dispatch(sendDataFailure(err));
            console.log("API Failure",err);
        })
    }
};

export function getListOfAccount(userId) {
    return (dispatch) => {
        console.log('User id', userId);
        dispatch(sendData(userId));
        baseURL.get('accountList',{
            params: {
                userId: userId
            }
        }).then(res => dispatch(sendDataSuccess(res)))
          .catch(err => {
            dispatch(sendDataFailure(err));
            console.log("API Failure",err);
           });
    }
};

export function addUser(userDetail) {
    return (dispatch) => {
        dispatch(sendData(userDetail));
        baseURL.post('addUser', {
            userDetail: userDetail
        })
        .then(res => dispatch(sendDataSuccess(res)))
        .catch(err =>  { 
            dispatch(sendDataFailure(err));
            console.log("API Failure",err);
        })
    }
};

//Create new account
export function createNewUser(accountDetail) {
    return (dispatch) => {
        dispatch(sendData(accountDetail));
        baseURL.post('users', accountDetail)
        .then(res => {
            dispatch(sendDataSuccess(res));
            console.log('res', res);
        })
        .catch(err =>  { 
            dispatch(sendDataFailure(err));
            console.log("Create New Account fail.", err);         
        })
    };
};

function sendData(data) {
    return {
        type: DATA_SENDING,
        data: data
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