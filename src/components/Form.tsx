import FieldSet from "./FieldSet";
import Heading from "./Heading";
import Input from "./Input";
import fields from "../utils/fields.json";
import InputSubmit from "./InputSubmit";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import {  z } from "zod";

const schema = z.object({
  oranizationName: z.string().min(3,{ message: "Must be 3 or more characters long" }),
  websiteUrl: z.string().url({ message: "Invalid url" }).startsWith("https://", { message: "Must provide secure URL" }).endsWith(".com", { message: "Only .com domains allowed" }),
  reasonForSigning: z.string().array(),
  integrationMethod: z.string(),
});

type FormFields = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      oranizationName: "",
      websiteUrl: "",
      reasonForSigning: [],
      integrationMethod: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      console.log(data)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      reset()
      reset
    } catch (error) {
      setError("root", {
        message: "Something went wrong",
      });
    }
  };

  return (
    <form
      className="max-w-[512px] min-w-[300px] bg-gradient-to-r from-gray-900 to-purple-500 min-h-96 flex flex-col p-10 rounded-xl gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Heading heading="Tell us about your team" />
      {/* <Input id="organization" label="What is your company called?" placeholder="Organisation name" type="text"/>
          <Input id="website" label="What is your website url (optional)?" placeholder="https://" type="url"/>
          <FieldSet label="I’m signing up for Tiptap because" fields={fields.checkBoxes} type="checkbox"/>
          <FieldSet label="What is your preferred integration method?" fields={fields.radios} type="radio"/>
          <InputSubmit buttonText="Create team"/> */}
      <div className="flex flex-col gap-2">
        <label htmlFor="oranizationName" className="text-base">
          What is your company called?
        </label>
        <input
          {...register("oranizationName")}
          placeholder="Organisation name"
          type="text"
          id="oranizationName"
          className="bg-gray-700 p-2 rounded-xl outline outline-gray-600 hover:outline-purple-200"
        />
        {errors.oranizationName && (
        <div className="text-red-500">{errors.oranizationName.message}</div>
      )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="oranizationName" className="text-base">
        What is your website url (optional)?
        </label>
        <input
          {...register("websiteUrl")}
          placeholder="https://"
          type="url"
          id="websiteUrl"
          className="bg-gray-700 p-2 rounded-xl outline outline-gray-600 hover:outline-purple-200"
        />
        {errors.websiteUrl && (
        <div className="text-red-500">{errors.websiteUrl.message}</div>
      )}
      </div>
      <fieldset className="flex gap-2 flex-wrap">
        <legend className="mb-2">I’m signing up for Tiptap because</legend>
        {fields.checkBoxes?.map(({ label }) => (
          <div className="bg-gray-500 bg-blend-normal px-3 py-2 rounded-xl flex items-center gap-2" key={label}>
            <input
              {...register("reasonForSigning")}
              type="checkbox"
              value={label}
              id={label}
              className="appearance-none w-4 h-4 cursor-pointer outline outline-gray-400 rounded-sm hover:outline-purple-400 hover:outline-4 focus:outline-purple-400 focus:outline-4 checked:bg-tick checked:bg-purple-400 checked:outline-4"
            />
            <label htmlFor={label} className="font-medium">
              {label}
            </label>
          </div>
        ))}
      </fieldset>
      <fieldset className="flex gap-2 flex-wrap">
        <legend className="mb-2">
          What is your preferred integration method
        </legend>
        {fields.radios?.map(({ label }) => (
          <div className="bg-gray-500 bg-blend-normal p-2 rounded-xl flex items-center gap-3" key={label}>
            <input
              {...register("integrationMethod")}
              type="radio"
              value={label}
              id={label}
              // name={label}
              className="appearance-none w-4 h-4 cursor-pointer outline outline-gray-400 rounded-lg hover:outline-purple-400 hover:outline-4 focus:outline-purple-400 focus:outline-4 focus:bg-white focus:border-1"
            />
            <label htmlFor={label} className="font-medium">
              {label}
            </label>
          </div>
        ))}
      </fieldset>
      <InputSubmit buttonText="Create team" isSubmitting={isSubmitting}/>
    </form>
  );
};

export default Form;
