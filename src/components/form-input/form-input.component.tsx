import "./form-input.styles.scss";

type FormInputType = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const FormInput = ({ label, ...otherProps }: FormInputType) => {
  return (
    <div className="group">
      <input {...otherProps} className="form-input"></input>
      {label && (
        <label
          className={`${
            otherProps?.value?.toString().length ? "shrink" : null
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
