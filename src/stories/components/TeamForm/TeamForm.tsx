import { Button } from "../Button/Button";
import { Checkbox } from "../Checkbox/Checkbox";
import { Field } from "../Field/Field";
import { Input } from "../Input/Input";
import { Radio } from "../Radio/Radio";
import "./TeamForm.css"

type TeamFormData = {
    organizationName: string,
    websiteUrl: string,
    signUpReason: string,
    preferredIntegration: string,
}
export interface TeamFormProps {
    onSubmit: () => {}
}

export const TeamForm = ({}: TeamFormProps) => {
  return (<form id="team-form" className="team-form">
    <h2 className="form-title">Tell us about your team</h2>
    <Input
      name="organizationName"
      type="text"
      label="What is your company called?"
      placeholder="Organization name"
      required
    />
    <Input
      name="websiteUrl"
      type="text"
      label="What is your website url (optional)?"
      placeholder="https://"
    />
    <Field label="I'm signing up for Tiptap because">
      <Checkbox name="signUpReason" label="Editor" value="Editor" />
      <Checkbox name="signUpReason" label="Collaboration" value="Collaboration" />
      <Checkbox name="signUpReason" label="Al Integration" value="Al Integration" />
      <Checkbox name="signUpReason" label="Other" value="Other" />
    </Field>
    <Field label="What is your preferred integration method?">
      <Radio name="preferredIntegration" label="Self hosted" value="Self hosted" />
      <Radio name="preferredIntegration" label="Cloud" value="Cloud" />
    </Field>
    <Button label="Create team" form="team-form" type="submit"/>
  </form>);
};
