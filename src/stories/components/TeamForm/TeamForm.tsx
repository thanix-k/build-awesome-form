import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../Button/Button";
import { Checkbox } from "../Checkbox/Checkbox";
import { Field } from "../Field/Field";
import { Input } from "../Input/Input";
import { Radio } from "../Radio/Radio";

export type TeamFormData = {
    organizationName: string,
    websiteUrl: string,
    signUpReason: string[],
    preferredIntegration: string,
}
export interface TeamFormProps {
    onSubmit: (values: TeamFormData) => void
}

export const TeamForm = ({ onSubmit }: TeamFormProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<TeamFormData>({
    defaultValues: {
      signUpReason: [],
    }
  });
  const onFormSubmit: SubmitHandler<TeamFormData> = data => {
    onSubmit(data);
  };
  return (<form
        id="team-form"
        className="max-w-[450px] bg-[linear-gradient(90deg,_hsla(40,_7%,_9%,_1)_0%,_hsla(204,_64%,_60%,_1)_100%)] rounded-[10px] flex flex-col p-[40px] gap-[20px]"
        onSubmit={handleSubmit(onFormSubmit)}
     >
    <h2 className="text-white font-serif text-[30px] font-normal">Tell us about your team</h2>
    <Input
      type="text"
      label="What is your company called?"
      placeholder="Organization name"
      {...register("organizationName", { required: '* required' })}
      error={errors.organizationName?.message}
    />
    <Input
      type="text"
      label="What is your website url (optional)?"
      placeholder="https://"
      {...register("websiteUrl", { required: '* required' })}
      error={errors.websiteUrl?.message}
    />
    <Field error={errors.signUpReason?.message} label="I'm signing up for Tiptap because">
      <Checkbox {...register("signUpReason", { required: '* required' })} label="Editor" value="Editor"  />
      <Checkbox {...register("signUpReason", { required: '* required' })} label="Collaboration" value="Collaboration"/>
      <Checkbox {...register("signUpReason", { required: '* required' })} label="Al Integration" value="Al Integration"/>
      <Checkbox {...register("signUpReason", { required: '* required' })} label="Other" value="Other"/>
    </Field>
    <Field error={errors.preferredIntegration?.message} label="What is your preferred integration method?">
      <Radio {...register("preferredIntegration", { required: '* required' })} label="Self hosted" value="Self hosted"/>
      <Radio {...register("preferredIntegration", { required: '* required' })} label="Cloud" value="Cloud"/>
    </Field>
    <Button label="Create team" form="team-form" type="submit"/>
  </form>);
};
