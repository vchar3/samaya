import { DATA_FETCHING, DATA_FETCHING_SUCCESS, DATA_FETCHING_FAILURE} from '../constants';
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
<<<<<<< HEAD:VCharKarma/redux/actions/actions.js
        axios.post('http://35.237.110.220:3001/api/users/login', {
=======
        axios.post('http://localhost:3000/api/users/login', {
>>>>>>> 7d7dbd27c10b185d5fecb96b5ade682db540fa77:VCharKarma/redux/actions/actions.js
            userId: username,
            password: password
          }).then(res => dispatch(getDataSuccess(res)))
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

function getDataFailure(error) {
    return {
        type: DATA_FETCHING_FAILURE,
        error
    }
}