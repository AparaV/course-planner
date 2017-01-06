import React from 'react';

class Default extends React.Component {
  render() {
    return(
      <div>
        <h3>
          Once you have finished entering all your courses, hit submit!
        </h3>
      </div>
    );
  }
};

class Plan extends React.Component {
  render() {
    if (this.props.submitted == false){
      return(
        <Default />
      );
    }
    else {
      return(
        <h3>This works!</h3>
      );
    }
  }
};

module.exports = Plan;
