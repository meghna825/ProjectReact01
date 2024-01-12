
import { Formik } from 'formik';
import React from 'react';
import { useState,useEffect } from 'react';
import {ToastContainer, toast} from 'react-toastify';
import { useNavigate,Form } from 'react-router-dom'
const Login = ()=>{
    const [formDetails,setFormDetails] =useState({})
    const navigate = useNavigate()
    useEffect(() => {
        console.log('Form details:', formDetails);
      }, [formDetails]);
     
      
    return(
        <div className="login-page">
            <h1>Login Page</h1>
            <Formik
            initialValues={{ 
                'firstName':'',
                'lastName':'',
                'email':'',
                'password':'',
                'gender':''
             }}
            validate={values => {
                const errors = {};
                if(!values.firstName){
                    errors.firstName = '!Required'
                }
                if(!values.lastName){
                    errors.lastName = '!Required'
                }
                if(!values.password){
                    errors.password = '!Required'
                }
                if (!values.email) {
                errors.email = '!Required';
                } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                errors.email = 'Invalid email address';
                }
                return errors;
            }}
       onSubmit={(values, { setSubmitting }) => {
        
        setFormDetails(values)
        setSubmitting(false);
        toast.success('You have sucessfully signed up ,'+ values.firstName,{
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 15000
       })
     
       navigate('/');

       }}
     >
       {(formik) => (
         <form onSubmit={formik.handleSubmit} className='login-form'>
            <div className='form-group'>
            <label for = "firstName">FirstName</label>
           <input
             type="text"
             className='form-control'
             name="firstName"
             onChange={formik.handleChange}
             value={formik.values.firstName}
           />
           <span className='field_errors'>{formik.errors.firstName}</span>
           </div>
           <div className='form-group mt-2' >
            <label for="lastName">LastName</label>
           <input
             type="text"
             className='form-control'
             name="lastName"
             onChange={formik.handleChange}
             value={formik.values.lastName}
           />
           <span className='field_errors'>{formik.errors.lastName}</span>
           </div>
           <div className='form-group'>
            <label for ="email">Email</label>
           <input
             type="email"
             className='form-control'
             name="email"
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.email}
           />
           <span className='field_errors'>{formik.errors.email}</span>
           </div>
           <div className='form-group'>
            <label for = "password">Password</label>
           <input
             type="password"
             className='form-control'
             name="password"
             onBlur={formik.handleBlur}
             onChange={formik.handleChange}
             value={formik.values.password}
           />
           
           <span className='field_errors'>{formik.touched.password && formik.errors.password?formik.errors.password:''}</span>
           </div>
           <button type="submit" className='login-submit' disabled={formik.isSubmitting}>
            Submit 
            </button>
         </form>
       )}
     </Formik>
     <ToastContainer/>
     
        </div>
    )
}
export default Login