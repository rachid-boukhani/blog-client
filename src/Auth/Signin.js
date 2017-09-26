import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Redirect} from 'react-router'
import {Helmet} from "react-helmet"

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import config from '../config'

class Signin extends Component {

  constructor (props) {
    super(props)
    this.state = {
      userinfo: {
        username: '',
        password: ''
      },
      error: void 0
    }
  }

  handleUserNameChange = (e) => {
    this.setState({userinfo: Object.assign({}, this.state.userinfo, {username: e.target.value})})
  }

  handlePasswordChange = (e) => {
    this.setState({userinfo: Object.assign({}, this.state.userinfo, {password: e.target.value})})
  }

  handleSubmit = (e) => {
    const {username, password} = this.state.userinfo
    fetch(config.apis.auth, {
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify({username, password})
      })
    .then((response) => response.json())
    .then(result => {
      if (result.error) {
        this.setState({error: result.error})
      } else {
        this.setState({error: void 0})
        this.props.signInDone(result.token)
      }
    })
    .catch(console.error)
    e.preventDefault()
  }

  render () {
    return (
      <section className="auth">
        <Helmet>
          <title>Sign in</title>
        </Helmet>
        <form className="card"  onSubmit={this.handleSubmit}>
          <div>
            <label>username</label>
            <br/>
            <TextField type="text" name="username" value={this.state.userinfo.username} onChange={this.handleUserNameChange}/>
          </div>
          <br/>
          <div>
            <label>password</label>
            <br/>
            <TextField type="password" name="password" value={this.state.userinfo.password} onChange={this.handlePasswordChange}/>
          </div>
          <RaisedButton type="submit" label="Sign in" primary={true}/>
        </form>
        <div className="action">
          <h3>Don't have an account?</h3>
          <RaisedButton label="Sign up">
          </RaisedButton>
        </div>
      </section>
    )
  }
}

Signin.propTypes = {
  signInDone: PropTypes.func
}

export default Signin