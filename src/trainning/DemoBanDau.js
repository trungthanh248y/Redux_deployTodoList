import { createStore } from 'redux';

var initialState = {
    status : false,
    sort : {
        by : 'name',
        value : 1
    }
}


var myReducer = (state = initialState, action) => {
    if(action.type === 'TOGGLE_STATUS') {
        state.status = !state.status;
    }
    if(action.type === 'SORT') {
        //Nếu viết gán trực tiếp như trên thì nó sẽ thay đổi cả state ban đầu, nhưng mục tiêu là thêm một state mới.
        var { by, value } = action.sort;
        var { status } = state;
        return {
            status : status,
            sort : {
                by : by,
                value : value,
            }
        }
    }
    return state;
}


const store = createStore(myReducer);


console.log('Default: ', store.getState());
//Thực hiện cv thay đổi status
var action = { type : 'TOGGLE_STATUS' };
store.dispatch(action);//action này giời đã là action ở trên myReducer
console.log('TOGGLE_STATUS : ', store.getState());
// Thực hiện cv sx name từ Z tới A
var sortAction = {
    type: 'SORT',
    sort: {
        by : 'name',
        value : -1,
    }
}
store.dispatch(sortAction);
console.log("SORT : ", store.getState())
