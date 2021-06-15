import React from 'react'
import { dataType } from '../redux/actionApi'
interface myProps {
    data: dataType
}

function JokesSpotData(props: myProps) {
    console.log(props.data)
    return (
        <tr>
            <td>{props.data.id}</td>
            <td>{props.data.type}</td>
            <td>{props.data.setup}</td>
            <td>{props.data.punchline}</td>
        </tr>
    )
}

export default JokesSpotData
