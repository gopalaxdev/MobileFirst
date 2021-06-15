import * as constant from '../constant'
import { ILoader, IFetchData } from './actionApi';

const intialState = {
    loading: true
}

export const loadReducer = (state = intialState, action: ILoader) => {
    console.log(action)
    switch (action.type) {
        case constant.SHOW_LOADER:
            return {
                ...state,
                loading: true
            }

        case constant.HIDE_LOADER:
            return {
                ...state,
                loading: false
            }

    }
    return state;
}

const intialDataState = {
    fetchedData: []
}
export const loadData = (state = intialDataState, action: IFetchData) => {
    switch (action.type) {
        case constant.FETCH_DATA:
            return {
                ...state,
                fetchedData: [...action.payload]
            }
    }

    return state;
}

