import styles from "./checkbox.module.css";

const CheckBoxInput = ({ checkBoxValue, formik , name  }) => {
  return (
    <div className={styles.checkboxHolder}>
      {checkBoxValue.map((item) => (
        <div key={item.value } className={styles.checkboxContainer}>
          <input
          name = {name}
            type='checkbox'
            id={item.value}
            value={item.value}
            onChange={formik.handleChange}
            checked={console.log('checkBox')}
          />
          <label htmlFor={item.value}> {item.label} </label>

           {formik.errors[name] && formik.touched[name] && (
              <div className={styles.err}> {formik.errors[name]} </div>
            )}
        </div>
      ))}
    </div>
  );
};

export default CheckBoxInput;
