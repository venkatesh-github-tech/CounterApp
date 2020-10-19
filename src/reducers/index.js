import { combineReducers } from 'redux';
const counterReducer = (count = 10, action) => {
    //console.log(action);
    if (action.type === 'INCREMENT') {
        return count + 1;
    } else if (action.type === 'DECREMENT') {
        //console.log(action.type);
        return count - 1;
    } else {
        return count;
    }
}

export default combineReducers({
    counter: counterReducer
});