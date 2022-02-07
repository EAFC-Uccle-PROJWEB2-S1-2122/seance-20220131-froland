const InputWithLabel = ({
  id,
  value,
  type = "text",
  onInputChange,
  children,
}) => {
  return (
    <>
      <label htmlFor={id} className="label">
        {children}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        className="input"
        onChange={onInputChange}
      />
    </>
  );
};

export default InputWithLabel;
