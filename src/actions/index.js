import axios from 'axios';

export const SMURF_FETCH_START = "SMURF_FETCH_START";
export const SMURF_FETCH_SUCCESS = "SMURF_FETCH_SUCCESS";
export const SMURF_FETCH_FAIL = "SMURF_FETCH_FAIL";
export const SMURF_ADD = "SMURF_ADD";
export const SMURF_ERROR = "SMURF_ERROR";

export const fetchSmurfs = () => dispatch => {
  dispatch({type: SMURF_FETCH_START});
  axios.get("http://localhost:3333/smurfs")
  .then(resp => {
    dispatch({type: SMURF_FETCH_SUCCESS, payload: resp.data});
  })
  .catch(err => {
    dispatch({type: SMURF_FETCH_FAIL, payload: err});
  })
}

export const addSmurf = smurf => {
  return {type: SMURF_ADD, payload: smurf};
}

export const setError = error => {
  return {type: SMURF_ERROR, payload: error};
}
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.