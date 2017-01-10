/*Templates for the output view*/

import React from 'react';
import schedule from './scheduler';

function Default(props) {
  return(
    <div>
      <h3>
        Once you have finished entering all your courses, hit submit!
      </h3>
    </div>
  );
};

function Output(props) {

  var data = schedule(props.data);

  var items = data.map((value) =>
    <li key={value.toString()}>
      {value}
    </li>);

  return(
    <div>
      <h3>The Plan</h3>
      <hr className="style1"/>
      <h4>
        <ol style={{textAlign:'left'}}>{items}</ol>
      </h4>
      <hr className="style2"/>
    </div>
  );
};

module.exports = {
  Default,
  Output
};
