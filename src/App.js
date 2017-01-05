import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <br></br><br></br>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Enter GitHub handle"></input>
              <span className="input-group-btn">
                <button className="btn btn-secondary" type="button">Fetch!</button>
              </span>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}

export default App;
