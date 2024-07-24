import FieldSet from "./FieldSet"
import Heading from "./Heading"
import Input from "./Input"
import fields from "../utils/fields.json"
import InputSubmit from "./InputSubmit"

const Form = () => {
  return (
    <form className="max-w-[512px] min-w-[300px] bg-gradient-to-r from-gray-900 to-purple-500 min-h-96 flex flex-col p-10 rounded-xl gap-4">
         <Heading heading="Tell us about your team"/>
          <Input id="organization" label="What is your company called?" placeholder="Organisation name" type="text"/>
          <Input id="website" label="What is your website url (optional)?" placeholder="https://" type="url"/>
          <FieldSet label="I’m signing up for Tiptap because" fields={fields.checkBoxes} type="checkbox"/>
          <FieldSet label="What is your preferred integration method?" fields={fields.radios} type="radio"/>
          <InputSubmit buttonText="Create team"/>
    </form>
  )
}

export default Form