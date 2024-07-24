interface InputCheckboxProps {
  label:string
}

const InputCheckbox = ({label}:InputCheckboxProps) => {
  return (
    <div className="bg-gray-500 bg-blend-normal px-3 py-2 rounded-xl flex items-center gap-2">
      <input type="checkbox" value={label} id={label} className="appearance-none w-4 h-4 outline outline-gray-400 rounded-sm hover:outline-purple-400 hover:outline-4 focus:outline-purple-400 focus:outline-4 checked:bg-tick checked:bg-purple-400 checked:outline-4"/>
      <label htmlFor={label} className="font-medium"> 
          {label}
      </label>
   </div>
  )
}

export default InputCheckbox