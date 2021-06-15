import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import { useDispatch } from 'react-redux';
import * as constant from '../../constant'
import { logIn } from '../../redux/action'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom'
export interface IUser {
    username: String,
    password: any
}

const Login: React.FunctionComponent = props => {
    const [user, setUser] = useState<IUser>({
        username: "",
        password: ""
    })

    const dispatch = useDispatch();

    const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
        //  console.log("console: " + e.target.value)

        setUser({
            ...user,
            username: e.target.value
        });

        // console.log('After Setting Atate:' + user.username);

    }
    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
        //    console.log("console: " + e.target.value)

        setUser({
            ...user,
            password: e.target.value
        });

        //  console.log('After Setting Atate:' + user.password);
    }

    const handleSubmit = () => {
        console.log(user);


        if (user.username === "Gopala" && user.password === "password") {
            //Dispatch an action
            console.log('Inside')
            dispatch(logIn());
            window.location.replace('/viewTask');
        }
    }
    const state = useSelector(state => state);
    //console.log(state);


    return (



        < div className="container" >

            <div className="row justify-content-center algin-items-center">
                <div className="col-sm-12 col-md-8 m-5 bg-white p-5 border border-dark rounded">
                    <div className="col-sm-12 text-center"><h2 className="text-uppercase pb-3">Log In</h2></div>

                    <div className="col-sm-12 justify-content-center">
                        <fieldset className="m-3 p-1 bg-light border boder-dark rounded">
                            <label className="col-sm-12 col-md-4">Username</label>
                            <input className="col-sm-12 col-md-8" name="username" type="text"
                                placeholder="@username" onChange={handleUsername} />
                        </fieldset>

                        <fieldset className="m-3 p-1 bg-light border boder-dark rounded">
                            <label className="col-sm-12 col-md-4">Password</label>
                            <input className="col-sm-12 col-md-8" name="password" type="password"
                                placeholder="@password" onChange={handlePassword} />
                        </fieldset>

                        <button className="btn btn-success col-sm-12" type="submit"
                            onClick={handleSubmit}>Submit</button>

                    </div>

                </div>
            </div>
        </div >
        //</div>
    )
}

export default Login;
