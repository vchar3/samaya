import { DATA_FETCHING, DATA_FETCHING_SUCCESS, DATA_FETCHING_FAILURE} from './constants';
import axios from 'axios';

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
        dispatch(getData())
        axios.post('http://localhost:3000/api/users/login', {
            username: username,
            password: password
          }).then(res => {res.json()
                            console.log("Successful Response",res.json())
                            })
            .then(json => dispatch(getDataSuccess(json.results)))
            .catch(err => {dispatch(getDataFailure(err))
                            console.log("API Failure",err)
                            })
    }
};

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

function getDataFailure(data) {
    return {
        type: DATA_FETCHING_FAILURE
    }
}