/*Input Form*/
/*Using react-jsonschema-form*/

import React from 'react';
import Form from 'react-jsonschema-form';

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
            "title": "Course ID",
            "default": "Enter course ID"
          },
          "pre-req": {
            "type": "string",
            "title": "Pre-requisite courses",
            "description": "(Separate multiple courses with comma)"
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
      "course-id": "Enter course ID",
      "pre-req": ""
    }
  ]
};

//const log = (type) => console.log.bind(console, type);

//const onSubmit = ({formData}) => console.log(formData["course-list"][0]["course-id"]);

class CourseForm extends React.Component{
  render() {
    return (
          <Form schema={schema}
            formData={formData}
            uiSchema={uiSchema}
            onSubmit={this.props.onSubmit}>
            <button type="button submit" className="btn btn-success">Start planning!</button>
        </Form>
    );
  }
}

module.exports = CourseForm;
