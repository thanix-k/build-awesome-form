interface InputRadioProps {
  label:string
  name:string
}

const InputRadio = ({label,name}:InputRadioProps) => {
  return (
    <div className="bg-gray-500 bg-blend-normal p-2 rounded-xl flex items-center gap-3">
      <input type="radio" value={label} id={label} name={name}  className="appearance-none w-4 h-4 cursor-pointer outline outline-gray-400 rounded-lg hover:outline-purple-400 hover:outline-4 focus:outline-purple-400 focus:outline-4 focus:bg-white focus:border-1"/>
      <label htmlFor={label} className="font-medium"> 
          {label}
      </label>
   </div>
  )
}

export default InputRadio