import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import stateReducer from './statesList/state/stateReducer';

function loggerMiddleware({dispatch, getState}) {
    return function(next) {
        return function(action) {
            let result = next(action);
            return result;
            return true;
        }
    }
}

const rootReducers = combineReducers({
    states : stateReducer
});

let store = createStore(rootReducers, applyMiddleware(loggerMiddleware,thunk));
export default store;