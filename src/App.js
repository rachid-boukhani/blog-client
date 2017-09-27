import React, {Component} from 'react'
import {Redirect} from 'react-router'
import {Route} from 'react-router-dom'

import './App.css'
import Header from './Header'
import Home from './Home'
import Admin from './Admin'
import Blog from './Blog'
import Signin from './Auth/Signin'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogedIn: !!localStorage.getItem("token")
    }
  }

  signInDone= (token) => {
    localStorage.setItem("token", token)
    this.setState({
      isLogedIn: !!localStorage.getItem("token")
    })
  }

  render () {
    const checkAuth = (Component_, authIsRequired, props) => {
      if(authIsRequired) {
        if (this.state.isLogedIn) {
          return <Component_/>
        } else {
          return <Redirect to={{pathname: '/auth/signin', state: { from: props.location }}}/>
        }
      } else {
        if (this.state.isLogedIn) {
          return <Redirect to={{pathname: Component_, state: { from: props.location }}}/>
        } else {
          return <Signin signInDone={this.signInDone}/>
        }
      }
    }

    return (
      <div>
        <Header isLogedIn={this.state.isLogedIn}/>
        <main>
            <Route exact path="/home" component={(props) => (checkAuth(Home, true, props))} />
            <Route exact path="/admin" component={(props) => (checkAuth(Admin, true, props))} />
            <Route exact path="/blog" component={(props) => (checkAuth(Blog, true, props))} />
            <Route path="/auth/signin" component={(props) => (checkAuth('/home', false, props, Signin))} />
        </main>
      </div>
    )
  }
}