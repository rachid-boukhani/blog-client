import config from '../config'
import {LOGIN_POST, LOGIN_FAILED, LOGIN_DONE} from '../types'

export const loginPost = (username, password) => async (dispatch) => {
  dispatch({type: LOGIN_POST, username, password});
  const result = await fetch(config.apis.auth, {
    headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
    method: 'POST',
    body: JSON.stringify({username, password})
  })
  if (result.error) {
    dispatch({type: LOGIN_FAILED})
  } else {
    dispatch({type: LOGIN_DONE, token: result.token})
  }
};
