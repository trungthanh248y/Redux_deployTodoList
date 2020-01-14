import status from './status';//Reducers status
import sort from './sort';//Reducers sort
import { combineReducers } from 'redux';
//combineReducers() để combine tất cả các reducers trong application thành một single index reducer. 
//Mỗi một reducers đại diện cho một phần của application state, và Mỗi một reducer thì có state parameter là khác nhau.

const myReducer = combineReducers({
    status : status,
    sort : sort,
})

export default myReducer;