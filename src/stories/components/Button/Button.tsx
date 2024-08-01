export interface ButtonProps {
  type?: "submit" | "reset" | "button" | undefined;
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
      className={`
         block
         h-[30px]
         font-sans
         text-[15px]
         font-semibold
         rounded-[8px]
         text-center
         bg-white
         pl-[10px]
         pr-[10px]
         w-full
         border-none
         focus:[box-shadow:0_0_0_5px_rgb(255_255_255_/_40%)]
         [&:not(:focus)]:hover:bg-[lightgray]
         `}
      {...props}
    >
      {label}
    </button>
  );
};
