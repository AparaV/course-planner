/*Output view*/

import React from 'react';
import {Default, Output} from './output-templates';

class Plan extends React.Component {
  render() {
    if (this.props.submitted === false){
      return(
        <Default />
      );
    }
    else {
      return(
        <Output data={this.props.data}/>
      );
    }
  }
};

module.exports = Plan;
