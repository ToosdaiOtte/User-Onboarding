import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

function UserForm({ errors, touched }) {
    return(
        <div className='formContainer'>
            
            <Form>
                {touched.name && errors.name && <p>{errors.name}</p>}
                <Field type="text" name="name" placeholder="Full Name" /><br />
                {touched.email && errors.email && <p>{errors.email}</p>}
                <Field type="email" name="email" placeholder="Email" /><br />
                {touched.password && errors.password && <p>{errors.password}</p>}
                <Field type="password" name="password" placeholder="Password" /><br />
                <label>
                    Terms of Service
                    <Field type="checkbox" name="terms" />
                </label><br />
                <button>Submit</button>
            </Form>
        </div>
    );
}

const FormikUserForm = withFormik({
    mapPropsToValues({ name, email, password }){
        return {
          name: name || "",
          email: email || "",
          password: password || ""  
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required("First and Last name required"),
        email: Yup.string().email().required(),
        password: Yup.string().min(6).required("Password must contain atleast 6 characters")
    })
})(UserForm);

export default FormikUserForm;