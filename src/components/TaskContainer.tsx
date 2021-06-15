import React from 'react'
import { IId } from './AddPage'
import TaskRow from './TaskRow'
interface myProps {
    t: Array<IId>,

}
function TaskContainer(props: myProps) {
    console.log(props.t)
    return (

        <tbody>
            {
                props.t.map((t: IId) => <TaskRow ts={t} />
                )

            }
        </tbody>

    )
}

export default TaskContainer

