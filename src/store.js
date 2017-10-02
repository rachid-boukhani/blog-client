import {createStore, combineReducers} from 'redux'

const posts = (state = [], action) => {
  // TODO
}

const appReducer = combineReducers({posts})

const store = createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store
