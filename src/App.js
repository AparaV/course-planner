import React from 'react';
import logo from './logo.svg';
import './App.css';

//import Test from './timer';
import Form from './form';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Course Planner</h1>
        </div>
        <br></br><br></br>
        <Form />
      </div>
    );
  }
};

module.exports = App;
