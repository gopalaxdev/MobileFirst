import * as constant from '../constant'
import { ThunkDispatch as Dispatch } from "redux-thunk";
import axios from 'axios';

export interface IShowLoader {
    type: constant.SHOW_LOADER
}

export const showLoader = () => {
    return {
        type: constant.SHOW_LOADER
    }
}

export interface IHideLoader {
    type: constant.HIDE_LOADER
}

export const hideLoader = () => {
    return {
        type: constant.HIDE_LOADER
    }
}

export type ILoader = IShowLoader | IHideLoader


export interface dataType {
    id: Number,
    type: string,
    setup: string,
    punchline: string
}

export interface IFetchData {
    type: constant.FETCH_DATA,
    payload: Array<dataType>
}

export const fetchData = (data: Array<dataType>) => {
    return {
        type: constant.FETCH_DATA,
        payload: data
    }
}

export const loadContent = () => async (dispatch: Dispatch<ILoader, {}, any>) => {
    try {
        const { data } = await axios.get('https://official-joke-api.appspot.com/jokes/ten')

        dispatch(fetchData(data))
    } catch (error) {
        console.log('Some Error: ' + error)
    }

}