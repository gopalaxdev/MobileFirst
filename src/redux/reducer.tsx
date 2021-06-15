import { IUser } from '../type';
import { IAuth, IUnauth } from './action'
import { AUTHENTICATE, UNAUTHENTICATE } from '../constant';

const initalState = {
    username: null,
    isAuth: false
}

export default function userReducer(
    state: IUser = initalState,
    action: IAuth | IUnauth,
): IUser {
    console.log('Action:' + action);
    switch (action.type) {

        case AUTHENTICATE:
            return {
                ...state, username: 'Gopala', isAuth: true
            }

        case UNAUTHENTICATE:
            return {
                ...state, username: null, isAuth: false
            }

        default:
            return state
    }

}

