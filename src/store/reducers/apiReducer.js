
import {FETCH_START, FETCH_SUCCESS, FETCH_FAILURE} from '../actions'

export const initialState = {
    isFetching: false,
    imageUrl: null,
    error: ''
}

export const apiReducer = (state = initialState, action) => {
    switch(action.type){

        case FETCH_START:
            return {
                ...state,
                isFetching: true
            }

        case FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                imageUrl: action.payload
            }

        case FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        
        default:
            return state
    }
}