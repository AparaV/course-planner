/*Input Form*/
/*Using react-jsonschema-form*/

import React from 'react';
import Form from 'react-jsonschema-form';

const schema = {
  type: "array",
  title: "Courses",
  items: {
    type: "object",
    required: ["title"],
    properties: {
      title: {
        type: "string",
        title: "Course ID"
      },
      details: {
        type: "string",
        title: "Pre-requisites"
      }
    }
  }
}

const uiSchema = {
  "ui:options": {
    orderable: false
  }
};

const log = (type) => console.log.bind(console, type);

class CourseForm extends React.Component{
  render() {
    return (
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <Form schema={schema}
            uiSchema={uiSchema}
            onChange={log("changed")}
            onSubmit={log("submitted")}
            onError={log("errors")} />
        </div>
        <div className="col-md-4"></div>
      </div>
    );
  }
}

module.exports = CourseForm;
