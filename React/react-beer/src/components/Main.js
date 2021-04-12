import React from 'react';
import Header from './Header';
import {Link} from 'react-router-dom';

class Main extends React.Component {
  constructor() {
    super();
  }
  componentDidMount () {
    console.log(this.props);
    // const searchTerm = this.props.match.params.searchTerm;
    const params = this.props.match.params;
    const searchTerm = params.searchTerm || undefined;
    // this.loadBeers(searchTerm);
    console.log(searchTerm);
  }
  render () {
    return (
      <div className="wrapper">
        {/* <Link to="/about">about</Link> */}
        <Header siteName="Beer me" />
      </div>
    )
  }
}

export default Main;