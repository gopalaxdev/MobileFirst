import React, { ChangeEvent, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/configureStore'
import { editTask } from '../redux/actionTask'
import { useLocation } from 'react-router-dom'

import cuid from 'cuid'

type stateType = {
    from: {
        pathname: string,
        state: valType
    }
}
export interface IId {
    id: String
    task: ITask
}

interface valType {
    isUpdated: boolean,
    task: IId
}
export interface ITask {
    taskName: string | number | readonly string[] | undefined,
    description: string,
    startDate: string,
    endDate: string
}

interface Iprops {
    onCick(): () => void
}

function AddPage() {
    var location = useLocation<valType>();
    // console.log(location)
    const [task, setTask] = useState<ITask>({
        taskName: '',
        description: '',
        startDate: '',
        endDate: '',

    });
    const [idValue, setIdValue] = useState<String>('')
    var val = location.state
    useEffect(() => {


        var isUpdated;
        if (val) {
            console.log(val);
            isUpdated = val.isUpdated
        }

        if (isUpdated) {
            setIdValue(val.task.id);
            setTask({
                taskName: val.task.task.taskName,
                description: val.task.task.description,
                startDate: val.task.task.startDate,
                endDate: val.task.task.endDate,
            }
            )

            isUpdated = false
        }
    }, [])




    //console.log('IsUpdate:' + isUpdate)


    console.log(task)

    const handelChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log(e.target.value)

        if (e.target.name === 'taskname') {
            console.log('here')
            setTask({
                ...task,
                taskName: e.target.value
            });

        }
        else if (e.target.name === 'description') {
            setTask({
                ...task,
                description: e.target.value
            });
        }
        else if (e.target.name === 'start_date') {
            setTask({
                ...task,
                startDate: e.target.value
            });
        }
        else if (e.target.name === 'end_date') {
            setTask({
                ...task,
                endDate: e.target.value
            });
        }
    }

    const [added, setAdded] = useState(false);

    const dispatch = useDispatch();
    const handleSubmit = async (idVal: String) => {
        // console.log(task)


        console.log(idVal)

        var id: String = '';
        if (!idVal) {
            id = cuid()
        }
        else if (id !== undefined) {
            id = idVal;
        }

        console.log(task)
        dispatch(editTask({ id, task }));

        setAdded(true);
    }



    return (
        <div>
            < div className="container" >
                {added ? <div className='alert alert-success'>Added/Edited Successfully!!!</div> : <div></div>}
                <div className="row justify-content-center algin-items-center">
                    <div className="col-sm-12 col-md-8 m-5 bg-white p-5 border border-dark rounded">
                        <div className="col-sm-12 text-center"><h2 className="text-uppercase pb-3">Add/Edit Task</h2></div>
                        <form action="">
                            <div className="col-sm-12 justify-content-center">
                                <fieldset className="m-3 p-1 bg-light border boder-dark rounded">
                                    <label className="col-sm-12 col-md-4">Task Name</label>
                                    <input className="col-sm-12 col-md-8" name="taskname" type="text" value={task.taskName}
                                        placeholder="@task_name" onChange={handelChange} required />
                                </fieldset>

                                <fieldset className="m-3 p-1 bg-light border boder-dark rounded">
                                    <label className="col-sm-12 col-md-4 align-item-center">Description</label>
                                    <textarea className="col-sm-12 col-md-8" name="description" value={task.description}
                                        placeholder="@description" onChange={handelChange} required />
                                </fieldset>

                                <fieldset className="m-3 p-1 bg-light border boder-dark rounded">
                                    <label className="col-sm-12 col-md-4">Start Date</label>
                                    <input className="col-sm-12 col-md-8" name="start_date" type="date" value={task.startDate}
                                        placeholder="@start_date" onChange={handelChange} required />
                                </fieldset>

                                <fieldset className="m-3 p-1 bg-light border boder-dark rounded">
                                    <label className="col-sm-12 col-md-4">End Date</label>
                                    <input className="col-sm-12 col-md-8" name="end_date" type="date" value={task.endDate}
                                        placeholder="@end_date" onChange={handelChange} required />
                                </fieldset>
                                <button className="btn btn-success col-sm-12" type="button"
                                    onClick={() => handleSubmit(idValue)} >Submit</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default AddPage
