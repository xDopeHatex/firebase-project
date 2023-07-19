import "./button.styles.scss";

type ButtonTypeProps = {
  children: string;
  buttonType?: keyof typeof BUTTON_TYPE_CLASSES;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
};

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, type, onClick }: ButtonTypeProps) => {
  return (
    <button
      onClick={onClick}
      className={`button-container ${
        buttonType ? BUTTON_TYPE_CLASSES[buttonType] : null
      }`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
