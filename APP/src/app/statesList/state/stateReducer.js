import * as ActionTypes from './action-types';

const INITIAL_STATE = {
    records: null
}

export default function stateReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ActionTypes.FETCH_STATES_DATA:
            return state;
            break;
        case ActionTypes.FETCH_STATES_SUCCESS:
            console.log("reducer state : ", action.payload);
            return Object.assign({}, state, {records: action.payload});  
            break;
        case ActionTypes.FETCH_STATES_ERROR:
            return state;
            break;        
        case ActionTypes.ADD_NEW_STATE:
            return Object.assign({},state,{records:action.payload});
            break;   
        case ActionTypes.UPDATE_STATE:
            return Object.assign({},state,{records:action.payload});
            break;  
        default:
            return state;
            break;
    }
}