import { useFormik } from "formik";
import styles from "./signupform.module.css";
import * as yup from "yup";
import Input from "../../common/inputComponent/inputComponent";

const inputValue = [
  { label: "Name", type: "text", name: "name" },
  { label: "Email", type: "email", name: "email" },
  { label: "Phone Number", type: "phoneNumber", name: "phoneNumber" },
  { label: "Password", type: "text", name: "password" },
  { label: "PasswordConfirmation", type: "text", name: "passwordConfirmation" },
];

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
        <Input inputValue={inputValue} formik={formik} />
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
