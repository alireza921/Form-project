import styles from "./radio.module.css";

const RadioComponent = ({ radioInput, formik , name }) => {
  return (
    <div className={styles.radioHolder}>
      {radioInput.map((item) => {
        return (
          <div className={styles.radioContainer} key={item.value}>
            <input
              type='radio'
              id={item.value}
              name={name}
              value={item.value}
              checked={console.log('radio')}
              onChange={formik.handleChange}
            />  
            <label htmlFor={item.value}> {item.label} </label>

              {formik.errors[name] && formik.touched[name] && (
              <div className={styles.err}> {formik.errors[name]} </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RadioComponent;
