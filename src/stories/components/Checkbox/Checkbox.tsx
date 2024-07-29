import "./Checkbox.css"
export interface CheckboxProps {
  name: string;
  label: string;
  value: string;
  onClick?: () => void;
}

export const Checkbox = ({
  name,
  label,
  value,
  ...props
}: CheckboxProps) => {
  const id = `checkbox:${name}:${value}`;
  return (<div className="checkbox">
     <input type="checkbox" className="checkbox-input" id={id} value={value} {...props} />
     <label htmlFor={id} className="checkbox-label">{label}</label>
    </div>);
};
