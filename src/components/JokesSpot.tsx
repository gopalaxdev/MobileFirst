import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadContent, hideLoader, showLoader } from '../redux/actionApi'
import Loader from './Loader'
import { RootState } from '../redux/configureStore'
import { dataType } from '../redux/actionApi'
import JokesSpotData from './JokesSpotData'
interface IData {
    fetchedData: Array<dataType>
}

function JokesSpot() {

    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<Array<dataType>>();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(showLoader());
        setTimeout('', 3000)
        dispatch(loadContent());
        setTimeout('', 3000)
        dispatch(hideLoader());

        setLoading(false);



    }, [])


    const loadData = useSelector((state: RootState): IData => {
        return state.loadData
    })

    const dataArray = loadData.fetchedData;
    // setData(loadData)
    console.log(dataArray)

    const display = dataArray.map(data => {
        //console.log('here')
        return <JokesSpotData data={data} />
    })
    return (
        <div>
            <Loader />
            <div className='container'>
                <table className="table mt-5 pt-3">

                    <thead className="bg-success">
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">type</th>
                            <th scope="col">setup</th>
                            <th scope="col">punchline</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            display
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default JokesSpot


// //PAge Load
//