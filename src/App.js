import React from 'react';
import logo from './logo.svg';
import './App.css';

//import Test from './timer';
//import PlannerForm from './form';
import Form from 'react-jsonschema-form';
import CourseForm from './course-form';

const schema = {
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

const log = (type) => console.log.bind(console, type);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Course Planner</h2>
        </div>
        <br></br><br></br>
        <CourseForm />
      </div>
    );
  }
};

module.exports = App;
