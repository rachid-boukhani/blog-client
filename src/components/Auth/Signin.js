import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Redirect} from 'react-router'
import {connect} from 'react-redux'
import {Helmet} from "react-helmet"
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {loginPost} from '../../actions/auth'

class Signin extends Component {
  render () {
    const {handleSubmit} = this.props
    return (
      <section className="auth">
        <Helmet>
          <title>Sign in</title>
        </Helmet>
        <form className="card"  onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(this.userNameInput.value, this.passwordInput.value)
        }}>
          <div>
            <label>username</label>
            <br/>
            <TextField type="text" name="username" ref={input => this.userNameInput = input}/>
          </div>
          <br/>
          <div>
            <label>password</label>
            <br/>
            <TextField type="password" name="password" ref={input => this.passwordInput = input}/>
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
  handleSubmit: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (userName, password) => loginPost(dispatch, userName, password)
})

export default connect(null, mapDispatchToProps)(Signin)
