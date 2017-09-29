import React, {Component} from 'react'
import {Redirect} from 'react-router'
import {Route} from 'react-router-dom'

import './App.css'
import config from './config'
import Header from './Header'
import Home from './Home'
import Admin from './Admin'
import Blog from './Blog'
import Card from './Blog/Card'
import Signin from './Auth/Signin'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLogedIn: this.isLoggedIn(),
      posts: [],
      loading: true,
      error: ''
    }
  }

  componentDidMount() {
    this.loadPosts()
  }

  isLoggedIn() {
    return !!localStorage.getItem("token")
  }

  signInDone= (token) => {
    localStorage.setItem("token", token)
    this.loadPosts()
  }

  loadPosts() {
    const postsPromise = new Promise((resolve, reject) => {
      if (this.state.isLogedIn) {
        fetch(config.apis.posts, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            // 'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          method: 'GET'
        })
        .then((response) => response.json())
        .then(result => {
          if (result.error) {
            reject(new Error(result.error))
          } else {
            resolve(result)
          }
        })
      } else {
          reject(new Error('there is no user logged-in'))
      }
    })

    postsPromise.then(posts => {
      this.setState({
        isLogedIn: this.isLoggedIn(),
        loading: false,
        posts: posts
      })
    }).catch(error => {
      this.setState({
        isLogedIn: this.isLoggedIn(),
        loading: false,
        error: error.message
      })
    })

  }

  render () {
    const checkAuth = (authIsRequired, MyComponent, props) => {
      if(authIsRequired) {
        if (this.state.isLogedIn) {
          return <MyComponent {...props}/>
        } else {
          return <Redirect to={{pathname: '/auth/signin', state: { from: props.location }}}/>
        }
      } else {
        if (this.state.isLogedIn) {
          return <Redirect to={{pathname: MyComponent, state: { from: props.location }}}/>
        } else {
          return <Signin signInDone={this.signInDone}/>
        }
      }
    }
    const posts = this.state.posts

    return (
      <div>
        <Header isLogedIn={this.state.isLogedIn}/>
        <main>
            <Route exact path="/home" component={(props) => (checkAuth(true, Home, {}))} />
            <Route exact path="/admin" component={(props) => (checkAuth(true, Admin, {}))} />
            <Route exact path="/blog" component={(props) => (checkAuth(true, Blog, {posts}))} />
            <Route exact path="/blog/:id" component={(props) => {
              const post = this.state.posts.filter(post => post._id === props.match.params.id)[0]
              if (post) {
                return (checkAuth(true, Card, post))
              } else {
                if (this.state.loading) {
                  return <h1>Loading</h1>
                } else {
                  return <h1>{this.state.error}</h1>
                }
              }
            }} />
            <Route exact path="/auth/signin" component={(props) => (checkAuth(false, '/home', props, Signin))} />
        </main>
      </div>
    )
  }
}
