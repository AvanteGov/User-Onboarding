import React from "react";
import { withFormik, Form, Field } from "formik";

const FormPage = (props) => {

    console.log(props);


    return (
        <Form className="form-page-container">
            <label htmlFor="name" className="form-page-container__label">Full Name:</label>
            <Field name="name" placeholder="Full Name" />
            
            <label htmlFor="email" className="form-page-container__label">Email Address:</label>
            <Field name="email" placeholder="Email Address" />
            
            <label htmlFor="password" className="form-page-container__label">Password:</label>
            <Field name="password" placeholder="Password" />
            
            <label htmlFor="tos" className="form-page-container__label">Please check to agree to terms of use:</label>
            <Field name="tos" type="checkbox" />

            <button type="submit">Submit</button>
        </Form>
    )
}

export default withFormik({
    mapPropsToValues: props => {
        return {
          title: props.title || "",
          body: props.body || "",
          email: props.email || "",
          tos: props.tos || false
        };
    },
    handleSubmit: (values, formikbag) => {
        console.log('what the hell is formik bag:', formikbag)
        formikbag.props.addUser({
            ...values,
            id: Date.now()
        });
        formikbag.setStatus("Formikbag is being updated, i guess?");
        formikbag.resetForm();
    }

})(FormPage)

// need to add in validation schema with Yup 