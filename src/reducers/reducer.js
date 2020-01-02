import { DELETE_MOVIE, ADD_MOVIE, EDIT_MOVIE,NAME_FILTER,RATE_FILTER } from '../action/actionType'
import { movies } from '../data.js'


const intialState = { movie: movies ,
  findbyname: "",
  findbyrate:0
}

const MovieReducer = (state = intialState, action) => {
  switch (action.type) {
    case DELETE_MOVIE:
      return ({ ...state, movie: state.movie.filter((el, key) => el.id !== action.payload) });
    case ADD_MOVIE:
      return { ...state, movie: state.movie.concat(action.payload) };


    case EDIT_MOVIE:
      return { ...state, movie: state.movie.map(el => el.id === action.id ? { ...el, ...action.payload } : el) }
    case NAME_FILTER:
      case NAME_FILTER:
        return { ...state,  findbyname: action.payload };
      case RATE_FILTER:
        return { ...state, findbyrate: action.payload };    
        default: return state
  }
}
export default MovieReducer




