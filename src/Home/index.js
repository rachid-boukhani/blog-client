import React, {Component} from 'react'
import './Home.css'

export default class Home extends Component {
  render () {
    return (
      <section className="home">
        <div className="hero">
          <div className="title">
            <h1 className="ng-binding">Welcome to the blog!</h1>
            <h3>We blog about the angulars</h3>
          </div>
        </div>
      </section>
    )
  }
}