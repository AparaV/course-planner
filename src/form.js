/*Main Input Form*/
/*No longer used*/

import React from 'react';
import Course from './course-template';

class PlannerForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      courses: ['0']
    };
    this.counter = 1;

    this.addCourse = this.addCourse.bind(this);
    this.deleteCourse = this.deleteCourse.bind(this);
  };

  addCourse() {
    var newCourse = (this.counter++).toString();
    this.setState({ courses: this.state.courses.concat([newCourse]) });
    //console.log(this.state.courses);
  }

  deleteCourse(index) {
    let tempArr = this.state.courses;
    tempArr.splice(index, 1);
    this.setState({ courses: tempArr });
    //console.log(index);
    //console.log(this.state.courses);
  }

  render() {
    return (
      <div>
        <div id='Courses'>
          {this.state.courses
            .map((course, index) =>
            <Course key={course} index={index} deleteCourse={index => this.deleteCourse(index)} />)}
        </div>
        <br/>
        <button type="button" className="btn btn-success" onClick={this.addCourse}>+</button>
        <br/><br/>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <button type="button" className="btn btn-primary">Start planning!</button>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
};

module.exports = PlannerForm;
