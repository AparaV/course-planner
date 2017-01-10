/**Copyright (c) 2017 Aparajithan Venkateswaran (ssapar@gmail.com)
 *
 * This software is released under AGPLv3. For details see LICENSE
 * that came with this software
 */
 
import React from 'react';
import './App.css';

import CourseForm from './course-form';
import Plan from './plan';
import {Description, Footer} from './description';

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
          <span className="fa fa-calendar icon" aria-hidden="true" />
          <h2>Course Planner</h2>
        </div>
        <div className="row App-section main">
          <br></br><br></br>
          <div className="col-md-2"></div>
          <div className="col-md-3">
            <CourseForm onSubmit={({formData}) => this.onSubmit({formData})}/>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-3">
            <Plan submitted={this.state.submitted} data={(this.state.data)}/>
          </div>
          <div className="col-md-2"></div>
        </div>
        <Description styleName="App-section desc"/>
        <Footer styleName="App-footer"/>
      </div>
    );
  }
};

module.exports = App;
