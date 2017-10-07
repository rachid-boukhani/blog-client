import {createStore, combineReducers} from 'redux'

const posts = (state = [], action) => {
  switch (action.type) {
    case 'POSTS_FETCHED':
      return action.posts
    case 'ADD_POST':
      return [...state, {_id: action._id, title: action.title, text: action.text}]
    default:
      return []
  }
}

const appReducer = combineReducers({posts})

const store = createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store
