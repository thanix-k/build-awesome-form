import "./Radio.css"
export interface RadioProps {
  name: string;
  label: string;
  value: string;
  onClick?: () => void;
}

export const Radio = ({
  name,
  label,
  value,
  ...props
}: RadioProps) => {
  const id = `radio:${name}:${value}`;
  return (<div className="radio">
     <input name={name} type="radio" className="radio-input" id={id} value={value} {...props} />
     <label htmlFor={id} className="radio-label">{label}</label>
    </div>);
};
