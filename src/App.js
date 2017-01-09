import React from 'react';
import logo from './logo.svg';
import './App.css';

import CourseForm from './course-form';
import Plan from './plan';
//import schedule from './scheduler'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      data: {}
    };

    this.onSubmit = this.onSubmit.bind(this);
  };

  onSubmit({formData}) {
    //console.log(formData["course-list"][0]);
    this.setState({
      submitted: true,
      data: formData["course-list"]
    });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Course Planner</h2>
        </div>
        <br></br><br></br>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <CourseForm onSubmit={({formData}) => this.onSubmit({formData})}/>
          </div>
          <div className="col-md-5">
            <Plan submitted={this.state.submitted} data={(this.state.data)}/>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    );
  }
};

module.exports = App;
