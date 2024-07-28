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

function App() {
  return (
    <div className="flex items-center justify-center w-full h-dvh bg-black flex-col gap-4">
      <form className="w-full max-w-lg bg-gradient-to-r from-slate-900 to-purple-900 p-10 flex flex-col gap-5 rounded-xl">
        <h1 className="text-white text-3xl font-serif font-normal mb-4">Tell us about your team</h1>
        <Input id="organisation_name" label="What is your company called?" placeholder="Organisation name" type="text" required />
        <Input id="website_url" label="What is your website url (optional)?" placeholder="https://" type="url" required/>
        <FieldSet legend="I’m signing up for Tiptap because">
          {checkBoxes.map(({ label,key}) => <CheckBox key={key} label={label} value={label} />)}
        </FieldSet>
        <FieldSet legend="What is your preferred integration method?">
          {radios.map(({label,key}) => <Radio key={key} name="integration" label={label} value={label} />)}
        </FieldSet>
        <Button type="submit">Create team</Button>
      </form>
    </div>
  );
}

export default App;
