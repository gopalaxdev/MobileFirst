
import { ThunkDispatch as Dispatch } from "redux-thunk";

import * as constant from '../constant'
import { IUser } from '../components/Login/login'
//IAuth is defined to make sure that the return
//type from unauthenticate function is always IAuth
export interface IAuth {
    type: constant.AUTHENTICATE
}

function authenticate(): IAuth {
    console.log('here');
    return {
        type: constant.AUTHENTICATE
    }
}

//IUnauth is defined to make sure that the return
//type from unauthenticate function is always IUnauth
export interface IUnauth {
    type: constant.UNAUTHENTICATE
}

export function unauthenticate(): IUnauth {
    return {
        type: constant.UNAUTHENTICATE
    }
}

export type AuthenticationAction = IAuth | IUnauth;

export function logIn() {
    return async (dispatch: Dispatch<AuthenticationAction, {}, any>) => {
        await window.localStorage.setItem("authenticated", "true");
        dispatch(authenticate());
    };
}
export const logOut = () => async (dispatch: Dispatch<AuthenticationAction, {}, any>) => {

    await window.localStorage.setItem("authenticated", "false");
    dispatch(unauthenticate());

}
export const checkAuthentication = () => async (dispatch: Dispatch<AuthenticationAction, {}, any>) => {

    const auth = await window.localStorage.getItem("authenticated");
    const formattedAuth = typeof auth === "string" ?
        JSON.parse(auth) :
        null;

    console.log('CheckedFunc:' + auth + formattedAuth);
    formattedAuth ? dispatch(authenticate()) : dispatch(unauthenticate());

}