import "./Button.css"
export interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export const Button = ({
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className="submit-btn"
      {...props}
    >
      {label}
    </button>
  );
};
