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
          Planning future semesters can be daunting when you have a lot of options.
          But there is a very simple logic that dictates this process, and it does not work well when done manually.
          That is why I decided to teach my computer do it.
        </p><br />
      </div>
      <div className="col-md-3">
        <h3>How?</h3>
        <p style={{textAlign:'center'}}>
          The math is very simple. A course is always preceded by pre-requisites.
          If a lot of courses share a pre-requisite, then that pre-requisite must have a high priority.
        </p><br />
        <div className="col-md-1"></div>
      </div>
      <br />
    </div>
  );
};

function Footer(props){
  return(
    <div className={classnames(props.styleName)}>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8" style={{textAlign:'center'}}>
          <a className="github-button" target="_blank" href="https://github.com/traxex33/course-planner" data-style="mega" aria-label="Star Course Planner on GitHub">Star</a>&nbsp;&nbsp;&nbsp;
          <a className="github-button" target="_blank" href="https://github.com/traxex33" data-style="mega" aria-label="Follow @traxex33 on GitHub">Follow</a>&nbsp;&nbsp;&nbsp;
          <a className="github-button" target="_blank" href="https://github.com/traxex33/course-planner/issues" data-style="mega" aria-label="Issue Course Planner on GitHub">Report Issue</a>
          <br/><br/>
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
