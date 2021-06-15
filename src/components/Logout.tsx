import React from 'react'
import { useEffect } from 'react'
import { logOut } from '../redux/action'
import { useDispatch } from 'react-redux'

function Logout() {
    const dispatch = useDispatch();
    useEffect(() => {
        async function out() {
            await dispatch(logOut());
        }

        out();
        console.log('Inside Logout')
    }, [])

    return (
        <div>

        </div>
    )
}

export default Logout
