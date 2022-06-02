import { useFormik } from "formik";
import styles from "./signupform.module.css";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const validate = (values) => {
  //console.log(valeus);
  let errors = {};
  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.email) {
    errors.email = "email is required";
  }
  if (!values.password) {
    errors.password = "password is required";
  }
  return errors;
};
const SignUpForm = () => {
  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm({ values: "" });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  console.log("visited Fields", formik.touched);

  return (
    <section className={styles.holder}>
      <form onSubmit={formik.handleSubmit} className={styles.container}>
        <div className={styles.inputContainer}>
          <label> name </label>
          <input
            type='text'
            onChange={formik.handleChange}
            name='name'
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && formik.touched.name && (
            <div className={styles.err}> {formik.errors.name} </div>
          )}
        </div>

        <div className={styles.inputContainer}>
          <label> email </label>
          <input
            type='email'
            onChange={formik.handleChange}
            name='email'
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email && (
            <div className={styles.err}> {formik.errors.email} </div>
          )}
        </div>

        <div className={styles.inputContainer}>
          <label> password </label>
          <input
            type='text'
            onChange={formik.handleChange}
            name='password'
            value={formik.values.password}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password && (
            <div className={styles.err}> {formik.errors.password} </div>
          )}
        </div>

        <div>
          <button type='submit' className={styles.btn}>
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default SignUpForm;
