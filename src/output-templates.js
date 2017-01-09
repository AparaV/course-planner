/*Templates for the output view*/

import React from 'react';

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

  var items = props.data.map((value) =>
    <li key={value.toString()}>
      {value}
    </li>);

  return(
    <div>
      <h3>Hello</h3>
      <ol style={{textAlign:'left'}}>{items}</ol>
    </div>
  );
};

module.exports = {
  Default,
  Output
};
