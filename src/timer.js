import React from 'react';

class Test extends React.Component{

  constructor(props){
    super(props);
    this.state = {name: 'World'};
    this.changeName = this.changeName.bind(this);
  }

  changeName(){
    this.setState({
      name: document.getElementById('name-in').value
    });
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Enter something.." id="name-in"></input>
              <span className="input-group-btn">
                <button className="btn btn-secondary" type="button" onClick={this.changeName}>Fetch!</button>
              </span>
          </div>
          </div>
          <div className="col-md-4"></div>
        </div>
        <p>Hello {this.state.name}</p>
      </div>
    );
  }
};

//const element = <Test name="Apara" />

module.exports = Test;
