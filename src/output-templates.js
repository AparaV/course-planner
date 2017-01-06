/*Templates for the output view*/

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

class Output extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: []
    };

    this.setData = this.setData.bind(this);
  };

  setData(data) {
    let temp = [];
    for (let key in data){
      temp.push(data[key]);
    }
    this.setState({
      data: temp
    }, function(){});
  }

  componentDidMount(){
    this.setData(this.props.data);
  }

  componentWillUnmount(){
    this.setState({
      data: []
    });
  }

  render() {
    var items = this.state.data.map((value) =>
      <li key={value.id}>
        {value["course-id"]}, {value["pre-req"]}
      </li>);

    return(
      <div>
        <h3>Hello</h3>
        <ul>{items}</ul>
      </div>
    );
  }
};

module.exports = {
  Default,
  Output
};
