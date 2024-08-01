interface ButtonProps {
  buttonText:string;
  isSubmitting:boolean;
}

const InputSubmit = ({buttonText,isSubmitting}:ButtonProps) => {
  return (
    <input className="bg-white text-black cursor-pointer font-medium p-2 rounded-xl" type="submit" value={isSubmitting ? "Creating Team..." : buttonText}/>
  )
}

export default InputSubmit