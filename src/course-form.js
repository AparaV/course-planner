/**Copyright (c) 2017 Aparajithan Venkateswaran (ssapar@gmail.com)
 *
 * This software is released under AGPLv3. For details see LICENSE
 * that came with this software
 */

//Input Form
//Using react-jsonschema-form

import React from 'react';
import Form from 'react-jsonschema-form';
import './App.css';

const schema = {
  "type": "object",
  "properties": {
    "course-list": {
      "type": "array",
      "title": "Course Builder",
      "items": {
        "type": "object",
        "required": [
          "course-id"
        ],
        "properties": {
          "course-id": {
            "type": "string",
            "title": "Course ID"
          },
          "pre-req": {
            "type": "string",
            "title": "Pre-requisite courses",
            "description": "(Separate courses with comma)"
          }
        }
      }
    }
  }
};

const uiSchema = {
  "course-list": {
    "ui:options": {
      orderable: false
    }
  }
}

const formData = {
  "course-list": [
    {
      "course-id": "CSCI 2270",
      "pre-req": "CSCI 1310"
    }
  ]
};

function CustomTitleField() {
  return (
    <div>
      <h3>Course Builder</h3>
      <hr />
    </div>
  );
};

const fields = {
  TitleField: CustomTitleField
};

class CourseForm extends React.Component{
  render() {
    return (
          <Form schema={schema}
            formData={formData}
            uiSchema={uiSchema}
            fields={fields}
            onSubmit={this.props.onSubmit}>
            <button type="button submit" className="btn btn-submit">Start planning!</button>
        </Form>
    );
  }
}

module.exports = CourseForm;
