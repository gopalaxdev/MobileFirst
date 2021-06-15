import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/configureStore'
import Image from '../image/loader.gif'
function Loader() {

    const loading = useSelector((state: RootState) => {
        return state.loadReducer
    })
    console.log(loading)

    if (!loading.loading) {
        console.log('here Loading:' + loading)
        return null;
    }

    return (
        <div>
            <div>
                <img src={Image} alt="Loading" />
            </div>
        </div>
    )
}

export default Loader
