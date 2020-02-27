import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Button,
  FormGroup
} from "reactstrap";
import * as Yup from "yup";


const Signin = props => {
  return (
    <div>
      <h1 className="pagetitle">Sign In</h1>
      <div className="form-div">
        <Formik
          initialValues={{
            email: props.email || "",
            password: props.password || ""
          }}
          onSubmit={(values, tools) => {
            tools.resetForm();
            console.log(values);
          }}
          validationSchema={Yup.object().shape({
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
                <ErrorMessage name="email" />
                <Field name="email" type="email" placeholder="Email" className="form-control"/>
              </FormGroup>
              <FormGroup>
                <ErrorMessage name="password" />
                <Field name="password" type="password" placeholder="Password" className="form-control"/>
              </FormGroup>
              <Button type="submit">Submit</Button>
            </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Signin