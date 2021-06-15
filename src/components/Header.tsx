import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/configureStore'
//import { IRet } from '../components/HomePage'
function Header() {


    const user = useSelector((state: RootState) => {
        return state.userReducer
    })

    const isAuth = user.isAuth;

    return (

        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="navbar-brand">Task</div>

                <ul className="navbar-nav">
                    {isAuth ? <li><Link className="nav-link" to="/viewTask">Home</Link></li> : null}
                    {isAuth ? <li><Link className="nav-link" to="/editTask">Add</Link></li> : null}
                    {isAuth ? <li><Link className="nav-link" to="/jokesSpot">JokesSpot</Link></li> : null}
                </ul>
                <ul className="navbar-nav navbar-collapse justify-content-end">
                    {/* {!isAuth ? <li><Link className="nav-link" to="/login">Login</Link></li> : null} */}
                    {isAuth ? <li><Link className="nav-link" to="/logout">Logout</Link></li> : null}
                </ul>
            </nav>
        </header>

    )
}

export default Header
