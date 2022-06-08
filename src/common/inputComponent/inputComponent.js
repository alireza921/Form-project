import React from "react";
import styles from "./inputcomponent.module.css";

const Input = ({ inputValue, formik }) => {
  return (
    <>
      <div className={styles.inputContainer}>
        {inputValue.map((item) => (
          <React.Fragment key={item.name}>
            <label> {item.label} </label>
            <input
              {...formik.getFieldProps(item.name)}
              type={item.type}
              name={item.name}
            />
            {formik.errors[item.name] && formik.touched[item.name] && (
              <div className={styles.err}> {formik.errors[item.name]} </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Input;
