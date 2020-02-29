import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Button,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import Axios from 'axios';
import * as Yup from "yup";

const CreateIssue = props => {
  return (
    <div>
      <h1 className="pagetitle">Create an Issue</h1>
      <div className="form-div">
        <Formik
          initialValues={{
            title: '',
            description: '',
            zipcode: '',
            imageurl: ''
          }}
          onSubmit={(values, tools) => {
            tools.resetForm();
            console.log(values);
          }}
          validationSchema={Yup.object().shape({
            title: Yup.string()
              .required("Required")
              .min(5, "Minimum 5 characters"),
            description: Yup.string()
              .required("Required"),
            zipcode: Yup.string()
              .required("Required")
              .length(5)
              
          })}
        >
            <Form className="create-issue-form">
              <FormGroup>
                <Label for="title">Title:</Label>
                <Field name="title" type="text" id="title" className="form-control"/>
                <ErrorMessage name="title" />
              </FormGroup>
              <FormGroup>
                <Label for="description">Description of issue:</Label>
                <Field as='textarea' name="description" id="description" className="form-control"/>
                <ErrorMessage name="description" />
              </FormGroup>
              <FormGroup>
                <Field name="zipcode" type="text" id="zipcode" placeholder="Zipcode"className="form-control"/>
                <ErrorMessage name="zipcode" />
              </FormGroup>
              <FormGroup>
                <Field name="imageurl" type="text" id="imageurl" placeholder="Image URL"className="form-control"/>
                <ErrorMessage name="imageurl" />
              </FormGroup>
              <Button type="submit">Submit</Button>
            </Form>
        </Formik>
      </div>
    </div>
  );
};

export default CreateIssue;
