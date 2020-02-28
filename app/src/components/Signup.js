import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Button,
  FormGroup
} from "reactstrap";
import Axios from 'axios';
import * as Yup from "yup";

const Signup = props => {
  return (
    <div>
      <h1 className="pagetitle">Sign Up</h1>
      <div className="form-div">
        <Formik
          initialValues={{
            name: props.name || "",
            email: props.email || "",
            password: props.password || ""
          }}
          onSubmit={(values, tools) => {
            tools.resetForm();
            console.log(values);
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string()
              .required("Required")
              .min(3, "Minimum 3 characters"),
            email: Yup.string()
              .required("Required")
              .email("Must be valid"),
            password: Yup.string()
              .required("Required")
              .min(8, "Minimum 8 characters")
          })}
        >
            <Form>
              <FormGroup>
                <ErrorMessage name="name" />
                <Field name="name" type="text" placeholder="Enter name" className="form-control"/>
              </FormGroup>
              <FormGroup>
                <ErrorMessage name="email" />
                <Field name="email" type="email" placeholder="Enter email" className="form-control"/>
              </FormGroup>
              <FormGroup>
                <ErrorMessage name="password" />
                <Field name="password" type="password" placeholder="Enter password" className="form-control"/>
              </FormGroup>
              <Button type="submit">Submit</Button>
            </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
