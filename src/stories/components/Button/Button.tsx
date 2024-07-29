import "./Button.css"
export interface ButtonProps {
  type?: string;
  form?: string;
  label: string;
  value?: string;
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
