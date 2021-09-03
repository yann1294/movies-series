import { FETCH_MOVIES, SEARCH_MOVIE,FETCH_MOVIE, LOADING } from "../actions/types";

const initialState = {
    text: '',
    movies: [],
    loading: false,
    movie: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state= initialState, action) {
    switch(action.type){
        case SEARCH_MOVIE:
            return{
                ...state,
                text: action.payload,
                loading: false
            }
        case FETCH_MOVIES:
                return{
                    ...state,
                    movies: action.payload,
                    loading: false
                }
        case FETCH_MOVIE: 
                return{
                    ...state,
                    movie: action.payload,
                    loading: false
                }
        case LOADING:
            return{
                ...state,
                loading: true
            }
        default:
            return state
    }
}