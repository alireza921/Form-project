import { useFormik } from "formik";
import styles from "./signupform.module.css";
import * as yup from "yup";

const initialValues = {
  name: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  phoneNumber: "",
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = yup.object({
  name: yup
    .string()
    .required("Name is Required !")
    .min(6, "Minimum 6 charachter "),
  email: yup.string().email("Email Is Invalid !").required("Email is Required"),
  // password: yup
  //   .string()
  //   .required("Password is Required ")
  //   .min(8, "Minimum 8 character"),

  // passwordConfirm: yup.string().required("password confirm is required"),
  password: yup.string().required("Password is required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),

  phoneNumber: yup
    .string()
    .min(11, "minimum 11 number")
    .required("phone Number is required")
    .matches(phoneRegExp, "Phone number is not valid"),
});

const SignUpForm = () => {
  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm({ values: "" });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  console.log("visited Fields", formik.touched);

  return (
    <section className={styles.holder}>
      <form onSubmit={formik.handleSubmit} className={styles.container}>
        <div className={styles.inputContainer}>
          <label> name </label>
          <input {...formik.getFieldProps("name")} type='text' name='name' />
          {formik.errors.name && formik.touched.name && (
            <div className={styles.err}> {formik.errors.name} </div>
          )}
        </div>

        <div className={styles.inputContainer}>
          <label> email </label>
          <input {...formik.getFieldProps("email")} type='email' name='email' />
          {formik.errors.email && formik.touched.email && (
            <div className={styles.err}> {formik.errors.email} </div>
          )}
        </div>

        <div className={styles.inputContainer}>
          <label> PhoneNumber </label>
          <input
            {...formik.getFieldProps("phoneNumber")}
            type='phoneNumber'
            name='phoneNumber'
          />
          {formik.errors.phoneNumber && formik.touched.phoneNumber && (
            <div className={styles.err}> {formik.errors.phoneNumber} </div>
          )}
        </div>

        <div className={styles.inputContainer}>
          <label> password </label>
          <input
            {...formik.getFieldProps("password")}
            type='text'
            name='password'
          />
          {formik.errors.password && formik.touched.password && (
            <div className={styles.err}> {formik.errors.password} </div>
          )}
        </div>

        <div className={styles.inputContainer}>
          <label> password Confirmation</label>
          <input
            {...formik.getFieldProps("passwordConfirmation")}
            type='text'
            name='passwordConfirmation'
          />
          {formik.errors.passwordConfirmation && formik.touched.passwordConfirmation && (
            <div className={styles.err}> {formik.errors.passwordConfirmation} </div>
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
