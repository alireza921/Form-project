import styles from "./radio.module.css";

const RadioComponent = ({ radioInput, formik , name }) => {
  return (
    <div className={styles.radio}>
      {radioInput.map((item) => {
        return (
          <div className={styles.radio} key={item.value}>
            <label htmlFor={item.value}> {item.label} </label>
            <input
              type='radio'
              id={item.value}
              name={name}
              value={item.value}
              checked={console.log('cs')}
              onChange={formik.handleChange}
            />  
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
