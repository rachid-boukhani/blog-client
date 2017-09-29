import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

class PostCard extends Component {
  render() {
    return (
      <Card>
        <CardTitle title={this.props.title}/>
        <CardText>{this.props.text}</CardText>
        <CardActions>
          <Link to={`/blog/${this.props._id}`}>
            <FlatButton label="Open"/>
          </Link>
        </CardActions>
      </Card>
    )
  }
}

PostCard.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default PostCard