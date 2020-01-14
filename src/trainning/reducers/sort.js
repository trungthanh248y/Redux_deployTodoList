import * as types from '../constants/ActionTypes';

var initialState = {
    arr: [],
    by : 'status',
    value : 1
}


var myReducer = (state = initialState, action) => {
    if(action.type === types.SORT) {
        console.log(action.type);
        //Nếu viết gán trực tiếp như trên thì nó sẽ thay đổi cả state ban đầu, nhưng mục tiêu là thêm một state mới.
        var { by, value, arr } = action.sort;
        arr.push({
            by : by,
            value : value
        });
        return {
            arr : arr,
            by : by,
            value : value,
        }
    }
    return state;
}

export default myReducer;