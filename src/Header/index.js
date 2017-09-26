import React, {Component} from 'react'
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'

import Menu from './Menu'

class Header extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <AppBar
          title="Title"
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementRight={<Menu isLogedIn={this.props.isLogedIn} />}
        />
      </div>
    )
  }
}

Header.propTypes = {
  isLogedIn: PropTypes.bool
}

export default Header