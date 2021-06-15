import { ITask, IId } from '../components/AddPage'

export interface IAddtask {
    type: 'EDIT_TASK',
    payload: IEdit
}

export interface IEdit {
    id: String,
    task: ITask
}

export const editTask = (task: IId) => {
    console.log('Edit Task Action')
    return {
        type: 'EDIT_TASK',
        payload: task
    }
}

export interface IDeletetask {
    type: 'DELETE_TASK',
    payload: IId
}



export const deleteTask = (task: IEdit) => {
    return {
        type: 'DELETE_TASK',
        payload: task
    }
}