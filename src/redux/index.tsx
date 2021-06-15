import { combineReducers } from 'redux';
import userReducer from './reducer';
import taskReducer from './reducerTask'
import { loadReducer, loadData } from './reducerApi'
const rootReducer = combineReducers({
    taskReducer: taskReducer,
    userReducer: userReducer,
    loadReducer: loadReducer,
    loadData: loadData
})

export default rootReducer;