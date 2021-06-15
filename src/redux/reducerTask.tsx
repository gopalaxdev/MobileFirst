import { ITask } from '../components/AddPage'
import { IAddtask, IDeletetask, IEdit } from './actionTask'
import { EDIT_TASK, DELETE_TASK } from '../constant'
import { IId } from '../components/AddPage'
const intialState = {
    tasks: []
}

export default function taskReducer(state = intialState, action: IAddtask | IDeletetask) {
    console.log(action)
    console.log(state)
    switch (action.type) {
        case EDIT_TASK:
            return {
                ...state,
                tasks: [...state.tasks.filter((task: IId) => task.id !== action.payload.id),
                action.payload]
            };

        case DELETE_TASK:
            // console.log(state)
            return {
                ...state,
                tasks: [...state.tasks.filter((task: IId) => task.id !== action.payload.id)]
            }
    }
    console.log('Reduce Task: ' + state)
    return state
}