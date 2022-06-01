import { useFormik } from "formik";
import { useState } from "react";
import styles from "./signupform.module.css";
const SignUpForm = () => {

const  initialValues = {
    name : "" , email : "" , password : ""
}
    const formik = useFormik({ 
       initialValues,
    })
console.log(formik.values);


  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log("submit");
  };



  return (
    <section className={styles.holder}>
      <form onSubmit={submitFormHandler} className={styles.container}>
        <div className={styles.inputContainer}>
          <label> name </label>
          <input
            type='text'
            onChange={formik.handleChange}
            name='name'
            value={formik.values.name}
          />
        </div>

        <div className={styles.inputContainer}>
          <label> email </label>
          <input
            type='email'
            onChange={formik.handleChange}
            name='email'
            value={formik.values.email}
          />
        </div>

        <div className={styles.inputContainer}>
          <label> password </label>
          <input
            type='text'
            onChange={formik.handleChange}
            name='password'
            value={formik.values.password}
          />
        </div>

        <div>
          <button className={styles.btn}> Submit </button>
        </div>
      </form>
    </section>
  );
};

export default SignUpForm;
