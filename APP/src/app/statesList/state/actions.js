import * as ActionTypes from '../state/action-types';
import dispatch from 'redux';
import store from '../../store';

export function fetchStateData(data) {
    return {
        type: ActionTypes.FETCH_STATES_DATA,
        payload: data
    }
}

export function fetchStateSuccess(stateToView) {
    return {
        type: ActionTypes.FETCH_STATES_SUCCESS,
        payload: stateToView
    }
}

export function fetchStateError() {
    return {
        type: ActionTypes.FETCH_STATES_ERROR,
        payload: {}
    }
}


function fetchData() {
    const URL = "http://localhost:7070/api/states";
    return fetch(URL, { method: 'GET' })
        .then(response => response.json());
}

export function fetchStates() {
    return (dispatch) => {
        let cachedStates = store.getState().states.records;
        if (cachedStates && cachedStates.length > 0) {
            dispatch(fetchStateSuccess(cachedStates));
        }
        else {
            fetchData().then((data) => {
                if (data) {
                    dispatch(fetchStateSuccess(data))
                }
                else {
                    dispatch(fetchStateError())
                }
            })
        }
    }
}


export function addNewState(states, addState) {
    return (dispatch) => {
        console.log("states : ",states);
        console.log("addState : ",addState);
        let newStates = [...states,addState];
        console.log("newStates : ",newStates);
        dispatch({
            type: ActionTypes.ADD_NEW_STATE,
            payload: newStates
        });
    }
}

export function updateState(states, updateState) {
    return (dispatch) => {
        console.log("updateState : ", updateState);
        let newStates = states.map((state) => {
            let finalState = updateState.id == state.id ? updateState : state;
            return finalState;
        });
        console.log(newStates);
        dispatch({
            type: ActionTypes.UPDATE_STATE,
            payload: newStates
        });
    }
}