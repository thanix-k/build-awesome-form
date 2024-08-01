import { createRef, forwardRef } from "react";

export interface InputProps {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
  error?: string;
  onClick?: () => void;
};

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref = createRef()) => {
  const {
    name,
    label,
    placeholder,
    error,
    ...inputProps
  } = props;
  const id = `input:${name}`;
  const errName = `input:err:${name}`;
  return (<div className="flex flex-col">
     <label
      htmlFor={id}
      className="text-white font-sans text-[15px] font-medium mb-[10px]"
     >
      {label}
    </label>
    <input
      className={`
        rounded-lg
        border-[2px]
        border-solid
        border-[gray]
        bg-[rgba(0,0,0,0.5)]
        pl-[10px]
        pr-[10px]
        w-full
        h-10
        text-white
        outline-none

        focus:border-[2px]
        focus:border-solid
        focus:border-[rgba(101,79,249)]
        
        placeholder:font-sans
        placeholder:text-[15px]
        placeholder:font-medium
        placeholder:text-[gray]
        placeholder:overflow-ellipsis

       [&:not(:placeholder-shown)]:border-[2px]
       [&:not(:placeholder-shown)]:border-solid
       [&:not(:placeholder-shown)]:border-[rgba(101,79,249)]
       ${error ? 'border-red-500': ''}
      `}
      id={id}
      name={name}
      placeholder={placeholder}
      ref={ref}
      {...inputProps}
      aria-invalid={!!error}
      aria-describedBy={errName}
    />
    {error && <span className={'text-red-500 text-[10px]'} id="errName">{error}</span>}
  </div>);
});
