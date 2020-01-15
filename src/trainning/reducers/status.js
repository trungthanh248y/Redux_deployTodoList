import * as types from '../constants/ActionTypes';

var initialState = false;

var myReducer = (state = initialState, action) => {
    if(action.type === types.TOGGLE_STATUS) {
        state = !state;
    }
    return state;
}

export default myReducer;