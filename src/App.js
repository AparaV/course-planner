import React from 'react';
import logo from './logo.svg';
import './App.css';

import CourseForm from './course-form';
import Plan from './plan';
import schedule from './scheduler'

/*const schema = {
  type: "array",
  title: "Courses",
  items: {
    type: "object",
    required: ["title"],
    properties: {
      title: {
        type: "string",
        title: "Course ID"
      },
      details: {
        type: "string",
        title: "Pre-requisites"
      }
    }
  }
}

const uiSchema = {
  "ui:options": {
    orderable: false
  }
};

const log = (type) => console.log.bind(console, type);*/

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
            <Plan submitted={this.state.submitted} data={schedule(this.state.data)}/>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    );
  }
};

module.exports = App;
