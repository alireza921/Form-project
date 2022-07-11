import { useFormik } from "formik";
import styles from "./signupform.module.css";
import * as yup from "yup";
import Input from "../../common/inputComponent/inputComponent";
import RadioComponent from "../../common/radioComponent/RadioComponent";
import CheckBoxInput from "../../common/checkbox/checkBoxComponent";

const inputValue = [
  { label: "Name", type: "text", name: "name" },
  { label: "Email", type: "email", name: "email" },
  { label: "Phone Number", type: "phoneNumber", name: "phoneNumber" },
  { label: "Password", type: "text", name: "password" },
  { label: "PasswordConfirmation", type: "text", name: "passwordConfirmation" },
];

const radioInput = [
  { label: "male", value: 0 },
  { label: "female", value: 1 },
];

const checkBoxValue = [
  { label: "React", value: "reactjs" },
  { label: "Angular", value: "angular" },
  { label: "Vuejs", value: " vuejs" },
];

const initialValues = {
  name: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  phoneNumber: "",
  gender: "",
  interests: [],
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = yup.object({
  name: yup
    .string()
    .required("Name is Required !")
    .min(6, "Minimum 6 charachter "),
  email: yup.string().email("Email Is Invalid !").required("Email is Required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Minimum 8 character"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("password confirm is required"),

  phoneNumber: yup
    .string()
    .min(11, "minimum 11 number")
    .required("phone Number is required")
    .matches(phoneRegExp, "Phone number is not valid"),
  gender: yup.string().required("gender is required"),
  interests: yup.array().min(1).required("interests is required"),
});

const SignUpForm = () => {
  const onSubmit = (values, { resetForm }) => {
    console.log("values");
    resetForm({ values: "" });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  // console.log("visited Fields", formik.values);

  return (
    <section className={styles.holder}>
      <form onSubmit={formik.handleSubmit} className={styles.container}>
        <Input inputValue={inputValue} formik={formik} />
        <RadioComponent radioInput={radioInput} formik={formik} name='gender' />
        <CheckBoxInput
          checkBoxValue={checkBoxValue}
          name='interests'
          formik={formik}
        />
        <div>
          <button
            type='submit'
            className={formik.isValid ? styles.btn : styles.disabled }
            disabled={!formik.isValid}>
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default SignUpForm;
