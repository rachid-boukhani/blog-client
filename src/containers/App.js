import React, {Component} from 'react'
import {PropTypes} from 'prop-types'
import {Redirect} from 'react-router'
import {Route} from 'react-router-dom'

import './App.css'
import Header from '../components/Header'
import Home from '../components/Home'
import Admin from '../components/Admin'
import Blog from '../components/Blog'
import Signin from '../components/Auth/Signin'

const App = () => {
  return (
    <div>
      <Header/>
      <main>
          <Route exact path="/home" component={Home} />
          {/*<Route exact path="/admin" component={Admin} />*/}
          {/*<Route exact path="/blog" component={Blog} />*/}
          <Route exact path="/auth/signin" component={Signin} />
      </main>
    </div>
  )
}

App.contextTypes = {
  store: PropTypes.object
}

export default App