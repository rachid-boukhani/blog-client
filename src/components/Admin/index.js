import React, {Component} from 'react'
import {Redirect} from 'react-router'
import {connect} from 'react-redux'
import Helmet from 'react-helmet'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import config from '../../config'

class Admin extends Component {

  constructor() {
    super();
    this.state = {
      post: {
        title: '',
        text: ''
      },
      error: void 0,
      redirect: false
    }
  }

  handleTitleChange= (e) => {
    this.setState({post: Object.assign({}, this.state.post, {title: e.target.value})})
  }
  handleContentChange= (e) => {
    this.setState({post: Object.assign({}, this.state.post, {text: e.target.value})})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {title, text} = this.state.post
    fetch(config.apis.posts, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      method: 'POST',
      body: JSON.stringify({title, text})
    })
    .then((response) => response.json())
    .then(result => {
      if (result.error) {
        this.setState({error: result.error})
      } else {
        this.setState({redirect: true, error: void 0})
      }
    })
    .catch(console.error)
  }

  render () {
      if (this.state.redirect) {
        return (<Redirect to={{pathname: '/blog'}}/>)
      } else {
        return (
          <section className="auth">
            <Helmet>
              <title>Create Post</title>
            </Helmet>
            <form className="card"  onSubmit={this.handleSubmit}>
              <div>
                <h1>Create a post!</h1><br/>
                <TextField name="title"  onChange={this.handleTitleChange} value={this.props.post.title} hintText="Post title"/><br />
                <TextField name="content"  onChange={this.handleContentChange} value={this.props.post.text} multiLine={true} rows={10}/><br />
                <RaisedButton type="submit" label="Submit" primary={true}/>
              </div>
            </form>
          </section>
        )
      }
  }
}

const mapStateToProps = state => ({
  post: state.post
});

const mapDispatchToProps = (dispatch) => ({
  handleAddPost(event) {
    // dispatch(setSearchTerm(event.target.value));
  }
});


export default connect(mapStateToProps)(Admin);