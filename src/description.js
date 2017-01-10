/**Copyright (c) 2017 Aparajithan Venkateswaran (ssapar@gmail.com)
 *
 * This software is released under AGPLv3. For details see LICENSE
 * that came with this software
 */

//Description and Footer

import React from 'react';
import classnames from 'classnames';

function Description(props) {
  return(
    <div className={classnames("row", props.styleName)}>
      <br></br><br></br>
      <div className="col-md-1"></div>
      <div className="col-md-3">
        <h3>What?</h3>
        <p style={{textAlign:'center'}}>This application helps you decide the order in which you should take the necessary courses to complete and earn your degree.</p><br />
      </div>
      <div className="col-md-4">
        <h3>Why?</h3>
        <p style={{textAlign:'center'}}>
          Sometimes, when you're planning your future semesters and there seems to be tons of courses to choose from that you to get overwhelmed and give up.
          At least this is what happened to me. And deep down, I realized that this is a very simple logic that dictated this, but doing it manually failed when you have a lot of options.
          That is why I decided to make the computer do it.
        </p><br />
      </div>
      <div className="col-md-3">
        <h3>How?</h3>
        <p style={{textAlign:'center'}}>
          The math is very simple. If a a lot of courses share a pre-requisite coure, then that pre-requisite must be a basic course having a high priority.
          And if a course does not have a pre-requisite, then it must obviously be one of the first courses to be completed.
        </p><br />
        <div className="col-md-1"></div>
      </div>
    </div>
  );
};

function Footer(props){
  return(
    <div className={classnames(props.styleName)}>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8" style={{textAlign:'center'}}>

        </div>
        <div className="col-md-2"></div>
      </div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8" style={{textAlign:'center'}}>
          <a target="_blank" href="https://twitter.com/apara_v"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></a>&nbsp;&nbsp;&nbsp;
          <a target="_blank" href="https://www.facebook.com/aparavenkateswaran"><i className="fa fa-facebook fa-2x" aria-hidden="true"></i></a>&nbsp;&nbsp;&nbsp;
          <a target="_blank" href="https://traxex33.github.io"><i className="fa fa-globe fa-2x" aria-hidden="true"></i></a>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};


module.exports = {
  Description,
  Footer
};
