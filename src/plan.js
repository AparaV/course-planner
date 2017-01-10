/**Copyright (c) 2017 Aparajithan Venkateswaran (ssapar@gmail.com)
 *
 * This software is released under AGPLv3. For details see LICENSE
 * that came with this software
 */

//Output view

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
