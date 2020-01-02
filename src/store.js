import { createStore,combineReducers} from "redux";
import moviesReducer from  "./reducers/reducer"
import MovieReducer from "./reducers/reducer";

const store = createStore(MovieReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;