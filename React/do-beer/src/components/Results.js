import React from 'react';
import Beer from './Beer';

class Results extends React.Component {
  // StatefulComponent StatelesComponent
  render() {
    if (this.props.loading) {
      return <div>loading...</div>
    }
    return(
      <div className="result">
        <div className="beers">
          {
            this.props.beers.map((details, i) => <Beer details={details} key={details.id}/>)
          }
        </div>
      </div>
    )
  }
}

export default Results;