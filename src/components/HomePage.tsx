import React, { useState, useEffect, ChangeEvent } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/configureStore';
import { IId } from './AddPage'
import TaskContainer from './TaskContainer'

export interface IRet {
    tasks: Array<IId>
}

function HomePage() {
    // - taskname
    // - description
    // - status ( scheduled | running | expired )

    //const [tasks, setTasks] = useState();
    const tasks = useSelector((state: RootState): IRet => {
        return state.taskReducer
    })

    const taskArray = tasks.tasks;
    console.log(tasks.tasks)

    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }

    const searchFilter = () => {
        // console.log(searchTerm)
        let taskA: Array<IId> = dateFilter();
        let arr = taskA.filter(function (task: IId) {
            //  console.log(task.taskName.toLowerCase().includes(searchTerm.toLowerCase()))
            if (task && task.task && task.task.taskName && task.task.taskName) {
                return task.task.taskName.toString().toLowerCase().includes(searchTerm.toLowerCase())
            }

        })

        return arr;
    }

    const [dateTerm, setDateTerm] = useState<String>('');

    const handleDate = (e: ChangeEvent<HTMLInputElement>) => {
        setDateTerm(e.target.value);
    }

    const dateFilter = () => {
        return taskArray.filter(function (task) {
            console.log(task)
            // return task.task.startDate >= dateTerm
            return task.task.startDate >= dateTerm
        })
    }

    var useD = false;

    if (dateTerm !== '') {
        useD = true
    }

    return (

        <div >
            {/* serachbar */}
            <div className="form-outline">
                <input type="search" id="form1" className="form-control" placeholder="search"
                    aria-label="Search" onChange={handleSearch} />
            </div>
            {/* dateImplementation */}
            <input className="form-control" name="search_date" type="date"
                placeholder="@search_date" onChange={handleDate} />
            <div className="container">
                <div className="col-sm-12 text-center"><h2 className="text-uppercase pb-3">Data Table</h2></div>
                <table className="table mt-5 pt-3">

                    <thead className="bg-success">
                        <tr>
                            <th scope="col">Taskname</th>
                            <th scope="col">Description</th>
                            <th scope="col">Status</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>

                    </thead>
                    {/* //{console.log(dynamicSearch())} */}
                    <TaskContainer t={searchFilter()} />
                    {/* {
                    taskArray.filter((task) => {
                        task.taskName.toLowerCase().includes(searchTerm);
                    }).map((val: ITask) => {
                        console.log(val)
                    })
                } */}
                    {/* <TaskContainer t={dynamicSearch} /> */}



                </table>
            </div>
        </div >
    )
}

export default HomePage
