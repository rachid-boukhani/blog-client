import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

class PostCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Card>
        <CardTitle title={this.props.title}/>
        <CardText>{this.props.text}</CardText>
        <CardActions>
          <FlatButton label="Open"/>
        </CardActions>
      </Card>
    )
  }
}



PostCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
}

export default PostCard