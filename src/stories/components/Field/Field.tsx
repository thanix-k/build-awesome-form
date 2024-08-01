export interface FieldProps extends React.PropsWithChildren {
    label: string,
    error?: string,
};

export const Field: React.FC<FieldProps> = ({
  label,
  children,
  error,
}: FieldProps) => {
  return (<fieldset className={`${error ? 'border-b-red-500 border-b-2': 'border-b-transparent border-b-2'} pb-[6px]`}>
    <legend
     className={`
        text-white
        font-sans
        text-[15px]
        font-medium
        mb-[10px]
      `}
    >{label}</legend>
    <div className={`
        flex
        flex-row
        flex-wrap
        gap-1
      `}>
      {children}
    </div>
  </fieldset>);
};
