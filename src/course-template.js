/*Each Course Template*/

import React from 'react';

class Course extends React.Component{

  // constructor(props){
  //   super(props);
  // }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Course ID" id="course-id"></input>
            </div>
          </div>
          <div className="col-md-5">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Pre-requisites (comma separated)" id="prereq"></input>
            </div>
          </div>
          <div className="col-md-1">
            <button type="button" className="btn btn-danger" onClick={() => this.props.deleteCourse(this.props.index)}>-</button>
          </div>
        </div>
        <br/>
      </div>
    );
  }
}

module.exports = Course;
