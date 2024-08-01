import InputCheckbox from './InputCheckbox'
import InputRadio from './InputRadio';

interface FieldSetProps {
    label:string;
    fields:{ label: string }[];
    type: string;
    name?:string;
}
const FieldSet = ({label,fields,type}:FieldSetProps) => {
  return (
    <fieldset className='flex gap-2 flex-wrap'>
        <legend className='mb-2'>{label}</legend>
        {fields?.map(({label}) => type === "checkbox" ? <InputCheckbox label={label} key={label}/> : <InputRadio label={label} key={label} name="preferred method"/>)}
    </fieldset>
  )
}

export default FieldSet