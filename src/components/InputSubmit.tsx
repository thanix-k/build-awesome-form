interface ButtonProps {
  buttonText:string;
}

const InputSubmit = ({buttonText}:ButtonProps) => {
  return (
    <input className="bg-white text-black font-medium p-2 rounded-xl" type="submit" value={buttonText}/>
  )
}

export default InputSubmit