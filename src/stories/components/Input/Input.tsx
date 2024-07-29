import "./Input.css"
export interface InputProps {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  onClick?: () => void;
};

export const Input = ({
  name,
  label,
  placeholder,
  ...props
}: InputProps) => {
  return (<div className="input-container">
     <label htmlFor={name} className="input-label">{label}</label>
     <input className="actual-input" id={name} placeholder={placeholder} {...props} />
    </div>);
};
