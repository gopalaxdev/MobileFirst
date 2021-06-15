import React from 'react';
import { IId } from './AddPage'
import { useDispatch } from 'react-redux'
import { deleteTask } from '../redux/actionTask'
import { Link } from 'react-router-dom'

interface myPropsT {
    ts: IId
}

function TaskRow(props: myPropsT) {
    console.log('here In TasRow')
    console.log(props.ts.task)
    const date = new Date();


    const arEndDate = props.ts.task.endDate.split('-');
    const dateEndVal = new Date(parseInt(arEndDate[0]), parseInt(arEndDate[1]) - 1, parseInt(arEndDate[2]));

    const arStartDate = props.ts.task.startDate.split('-');
    const dateStartVal = new Date(parseInt(arStartDate[0]), parseInt(arStartDate[1]) - 1, parseInt(arStartDate[2]));

    var status = '';

    if (dateStartVal <= date) {
        console.log('here 1')
        status = 'scheduled'
    }
    else if (date <= dateStartVal && dateEndVal > date) {
        console.log('here 2')
        status = 'running'
    }
    else if (date > dateEndVal) {
        console.log('here 3')
        status = 'expired'
    }

    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteTask(props.ts))
    }

    return (
        <tr>

            <td>
                {props.ts.task.taskName}
            </td>

            <td>
                {props.ts.task.description}
            </td>

            <td>
                {status}
            </td>
            <td>
                <button className='btn btn-warning' onClick={handleDelete}>
                    Delete
                </button>
            </td>

            <td>
                <Link to={{ pathname: '/editTask', state: { isUpdated: true, task: props.ts } }} className='btn btn-success' >
                    Edit
                </Link>
            </td>
        </tr>
    )
}

export default TaskRow;