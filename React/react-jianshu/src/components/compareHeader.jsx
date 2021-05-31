import React, { Component } from 'react';

class Header extends Component {
  state = {  }
  shallowEqual (objA, objB) {
    if(typeof objA !== 'object' || typeof objB !== 'object') return false;
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    if(keysA.length !== keysB.length) return false;
    for(let key of keysA) {
      // console.log(key, keysA);
      // console.log(objA[key],'--------');
      // console.log(objB[key],'--------');
      if (objA[key] !== objB[key]) {
        return false;
      }
    }
    return true;
  }
  // shouldComponentUpdate (nextProps, nextState) {
  //   let isSame = this.shallowEqual(nextProps, this.props) &&
  //   this.shallowEqual(nextState, this.state);
  //   return !isSame;
  // }
  render() {
    console.log('header render');
    const {title} = this.props;
    return (
      <div>
        Header: {title}
      </div>
    );
  }
}
 
export default Header;