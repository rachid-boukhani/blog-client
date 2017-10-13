import {createStore, combineReducers} from 'redux'
import posts from './reducers/post'

const appReducer = combineReducers({posts})

const store = createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store
