import React, {Component} from 'react'
import Helmet from 'react-helmet'
import TextField from 'material-ui/TextField'
import Card from './Card'
import config from '../config'

export default class Admin extends Component {

  constructor() {
    super()
    this.state = {
      search: '',
      filteredPosts: [],
      posts: [],
      error: void 0
    }
    this.getPosts()
  }

  handleSearchChange= (e) => {
    const search = e.target.value
    this.setState((prevState) => ({
        search: search,
        filteredPosts: prevState.posts.filter(post => post.title.includes(search))
      })
    )
  }

  getPosts() {
    fetch(config.apis.posts, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      method: 'GET'
    })
    .then((response) => response.json())
    .then(result => {
      if (result.error) {
        this.setState({error: result.error})
      } else {
        this.setState({
          search: '',
          filteredPosts: result,
          posts: result
        })
      }
    })
    .catch(console.error)
  }

  render () {
    const  posts = this.state.filteredPosts
    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        width: 500,
        height: 450,
        overflowY: 'auto',
      },
    }

    return (
      <section className="auth">
        <Helmet>
          <title>Posts</title>
        </Helmet>

        <div className="card">
          <h1>The latest from the blog</h1><br/>
          <TextField name="search"  onChange={this.handleSearchChange} value={this.state.search}  hintText="Search"/><br />
        </div>

        <div style={styles.root}>
            {posts.map((post, i) => (
                <Card key={i} {...post}/>
            ))}
        </div>


      </section>
    )
  }
}