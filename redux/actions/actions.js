import { DATA_FETCHING, DATA_FETCHING_SUCCESS, DATA_FETCHING_FAILURE, USER_LOGOUT} from '../constants';
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

export function getUserLogin(username, password) {
    return (dispatch) => {
        console.log('base url : ', baseURL)
        dispatch(getData())
        baseURL.post('users/login', {
            userId: username,
            password: password
          }).then(res => dispatch(getDataSuccess(res)))
            .catch(err => {dispatch(getDataFailure(err))
                            console.log("API Failure",err)
                            })
    }
};

export function logout() {
    return (dispatch) => {
        console.log("user logout")
        dispatch(logout());
    }
}

function getData() {
    return {
        type: DATA_FETCHING
    }
}

function getDataSuccess(data) {
    return {
        type: DATA_FETCHING_SUCCESS,
        data
    }
}

function getDataFailure(error) {
    return {
        type: DATA_FETCHING_FAILURE,
        error
    }
}

function logout() {
    return {
        type: USER_LOGOUT 
    }
}

