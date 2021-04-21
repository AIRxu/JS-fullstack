import React from 'react';
import { DatePicker } from 'antd';
import logo from '../../logo.svg';

class HomeHeader extends React.Component {
  handleDataChange = (date, dateString) => {
    console.log(date, dateString);
  }
  render() {
    return (
      <React.Fragment>
        <div className="row justify-content-center">
          <img src={logo} alt="" className="img-fluid"/>
        </div>
        <div className="row">
          <div className="col col-3 offset-3">
            <DatePicker picker="month" onChange={this.handleDataChange} />
          </div>
          <div className="col col-6"></div>
        </div>
      </React.Fragment>
    )
  }
}

export default HomeHeader;