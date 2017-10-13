import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import TextField from 'material-ui/TextField'
import Card from './Card'

export default class Blog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      search: '',
      filteredPosts: this.props.posts
    }
  }

  handleSearchChange= (e) => {
    const search = e.target.value
    this.setState({
      search: search,
      filteredPosts: this.props.posts.filter(post => post.title.includes(search))
    })
  }

  render () {
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
            {this.state.filteredPosts.map((post, i) => (
                <Card key={i} {...post}/>
            ))}
        </div>


      </section>
    )
  }
}

Blog.props = {
  posts: PropTypes.array
}
