import { ReactElement } from "react";
import "./button.styles.scss";

type ButtonTypeProps = {
  children: string;
  buttonType?: keyof typeof BUTTON_TYPE_CLASSES;
} & React.InputHTMLAttributes<HTMLInputElement>;

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }: ButtonTypeProps) => {
  return (
    <button
      className={`button-container ${
        buttonType ? BUTTON_TYPE_CLASSES[buttonType] : null
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
