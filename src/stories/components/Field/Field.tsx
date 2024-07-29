import './Field.css'

export interface FieldProps extends React.PropsWithChildren {
    label: string,
};

export const Field: React.FC<FieldProps> = ({
  label,
  children
}: FieldProps) => {
  return (<fieldset className="field">
    <legend className="field-label">{label}</legend>
    <div className="field-items">
      {children}
    </div>
  </fieldset>);
};
