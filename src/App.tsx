import { useForm,SubmitHandler,Controller } from "react-hook-form";
import Button from "./components/Button.tsx";
import { CheckBox } from "./components/CheckBox.tsx";
import FieldSet from "./components/FieldSet.tsx";
import Input from "./components/Input.tsx";
import { Radio } from "./components/Radio.tsx";

const checkBoxes = [
  {
    label: "Editor",
    key: "checkbox_editor"
  },
  {
    label: "Collaboration",
    key: "checkbox_collaboration",
  },
  {
    label: "AI Integration",
    key: "checkbox_ai_integration",
  },
  {
    label: "Other",
    key: "checkbox_other",
  }
] as const;

const radios = [
  {
    label: "Self hosted",
    key: "radio_self_hosted"
  },
  {
    label: "Cloud",
    key: "radio_cloud"
  }
] as const;

type FormData = {
  organisation_name: string;
  website_url: string;
  integration: string;
  reason: string[];
};

function App() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<FormData>({
    defaultValues: {
      organisation_name: "",
      website_url: "",
      integration: "",
      reason: []
    }
  });

  const onSubmit: SubmitHandler<FormData> = (data: any) => {
    console.log(data);
  };

  const radioGroupChanges = (value: string, onChange:(...event: any[]) => void) => {
    const newArray = [...getValues("reason")];
    const item = value;
    //Ensure array isnt empty
    if (newArray.length > 0) {
      //Attempt to find an item in array with matching id
      const index = newArray.findIndex((x) => x === item);
      // If theres no match add item to the array
      if (index === -1) {
        newArray.push(item);
      } else {
        //If there is a match and the value is empty, remove the item from the array
        newArray.splice(index, 1);
      }
    } else {
      //If the array is empty, add the item to the array
      newArray.push(item);
    }
    //Overwrite existing array with newArray}
    onChange(newArray);
  }

  return (
    <div className="flex items-center justify-center w-full h-dvh bg-black flex-col gap-4">
      <form className="w-full max-w-lg bg-gradient-to-r from-slate-900 to-purple-900 p-10 flex flex-col gap-5 rounded-xl" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-white text-3xl font-serif font-normal mb-4">Tell us about your team</h1>
        <Controller
          name="organisation_name"
          control={control}
          rules={{
            required: "Organization name is required.",
          }}
          render={({ field }) => <Input id="organisation_name" label="What is your company called?" placeholder="Organisation name" type="text" errorState={errors.organisation_name} {...field} />}
        />
        <Controller
          name="website_url"
          control={control}
          render={({ field }) => <Input id="website_url" label="What is your website url (optional)?" placeholder="https://" type="url" {...field}/>}
        />
        <Controller
          name="reason"
          control={control}
          render={({ field: { onChange,...restField} }) =>
            <FieldSet legend="I’m signing up for Tiptap because">
              {checkBoxes.map(({ label, key }) => <CheckBox key={key} label={label} {...restField} value={label} onChange={(event) => radioGroupChanges(event.target.value,onChange)} />)}
            </FieldSet>
          }
        />
        <FieldSet legend="What is your preferred integration method?">
          {radios.map(({ label, key }) => <Controller
            key={key}
            name="integration"
            control={control}
            render={({ field }) => <Radio key={key} label={label} {...field} value={label} />}
          />)}
        </FieldSet>
        <Button type="submit">Create team</Button>
      </form>
    </div>
  );
}

export default App;
