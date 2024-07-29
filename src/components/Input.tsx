import { type FieldError } from "react-hook-form";

type InputProps = {
    id: string;
    label?: string;
    errorState?: FieldError | undefined;
} & React.ComponentPropsWithoutRef<"input">;

export default function Input({ id, label,errorState, ...props }: InputProps) {
    return <div className="flex flex-col">
        {label && <label className="text-white mb-2" htmlFor={id}>{label}</label>}
        <input id={id} aria-invalid={errorState?true:false} className="p-2 outline-none bg-black/10 rounded-xl outline outline-1 outline-offset-0 outline-white/10 hover:outline-white/20 focus:outline-custom-purple text-white" {...props} />
        {errorState && <p role="alert" className="text-red-500 mt-2">{errorState.message}</p>}
  </div>;
}