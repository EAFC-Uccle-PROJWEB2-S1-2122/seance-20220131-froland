import styles from "./InputWithLabel.module.css";

const InputWithLabel = ({
  id,
  value,
  type = "text",
  onInputChange,
  children,
}) => {
  return (
    <>
      <label htmlFor={id} className={styles.label}>
        {children}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        className={styles.input}
        onChange={onInputChange}
      />
    </>
  );
};

export default InputWithLabel;
