import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

class Menu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      links: [
        {name: 'Home', url: '/home', requireLogin: false},
        {name: 'Blog', url: '/blog', requireLogin: true},
        {name: 'Admin', url: '/admin', requireLogin: true},
        {name: 'Sign in', url: '/auth/signin', requireLogin: false},
      ]
    }
  }

  render() {
    return (
      <IconMenu
        iconButtonElement={<IconButton><MoreVertIcon/></IconButton>}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        {
          this.state.links
          .filter(link => {return (!link.requireLogin || this.props.isLogedIn)})
          .map((link, i) => {
            if (link) {
              return (
                <MenuItem key={i} containerElement={<Link to={link.url}/>} primaryText={link.name}/>
              )
            }
          })
        }
      </IconMenu>
    )
  }
}

Menu.propTypes = {
  isLogedIn: PropTypes.bool
}

export default Menu