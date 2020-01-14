import { composeWithDevTools } from "redux-devtools-extension";

import { createStore, applyMiddleware, compose } from 'redux';
import { status, sort } from '../Actions/index';
import myReducer from '../reducers/index';

const composeEnhancers = composeWithDevTools({
    // Specify custom devTools options
  });
const store = createStore(myReducer, /* preloadedState, */ composeEnhancers(
    // applyMiddleware(...middleware),
    // other store enhancers if any
  ));

console.log('Default: ', store.getState());
store.dispatch(status());//status này là status dc import từ Action/index
console.log('TOGGLE_STATUS : ', store.getState());
store.dispatch(sort({
    arr: [4,1],
    by : 'name',
    value : -1,
}));//sort dc import từ Action/index
console.log("SORT : ", store.getState())

store.dispatch(status());
console.log('Reset : ', store.getState());
