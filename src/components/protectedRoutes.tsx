import * as React from 'react';
import { RouteProps, Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/configureStore';
import { IUser } from '../type'
interface protectedRouteProps {
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
    exact?: boolean,
    path: String,
}

const ProtectedRoutes: React.FunctionComponent<protectedRouteProps> = ({ component: Component,
    ...routeProps
}) => {


    let state = useSelector((state: RootState): IUser => {
        return state.userReducer;
    });
    ;
    const isAuth = state['isAuth'];

    console.log('isAuth: ' + isAuth)
    return (
        <div>


            {isAuth ? <Route render={routeProps =>
                <Component {...routeProps} />}
            /> : <Redirect to='/' />}


        </div>
    )
}

export default ProtectedRoutes
