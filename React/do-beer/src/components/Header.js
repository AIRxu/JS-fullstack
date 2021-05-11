import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

class Header extends React.Component {
  static propTypes = {
    siteName: propTypes.string
  }
  render() {
    console.log(this.props);
    return(
      <h1>
        <Link to="/">{this.props.siteName}</Link>
      </h1>
    )
  }
}

export default Header;

