import styles from "../radioComponent/radio.module.css";

const CheckBoxInput = ({ checkBoxValue, formik , name  }) => {
  return (
    <div>
      {checkBoxValue.map((item) => (
        <div key={item.value}>
          <label htmlFor={item.value}> {item.label} </label>
          <input
          name = {name}
            type='checkbox'
            id={item.value}
            value={item.value}
            onChange={formik.handleChange}
            checked={console.log('cx')}
          />
           {formik.errors[name] && formik.touched[name] && (
              <div className={styles.err}> {formik.errors[name]} </div>
            )}
        </div>
      ))}
    </div>
  );
};

export default CheckBoxInput;
