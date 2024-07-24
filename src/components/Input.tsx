interface InputProps {
  id:string;
  label:string;
  placeholder:string;
  type:string;
}

const InputText = ({id,label,placeholder,type}:InputProps) => {
  return (
   <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-base">
        {label}
      </label>
        <input placeholder={placeholder} type={type} id={id} className="bg-gray-700 p-2 rounded-xl outline outline-gray-600 hover:outline-purple-200" />
   </div>
  )
}

export default InputText