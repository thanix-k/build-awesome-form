import Button from "./components/Button.tsx";
import { CheckBox } from "./components/CheckBox.tsx";
import FieldSet from "./components/FieldSet.tsx";
import Input from "./components/Input.tsx";
import { Radio } from "./components/Radio.tsx";

const checkBoxes = ["Editor", "Collaboration", "AI Integration", "Other"];
const radios = ["Self hosted", "Cloud"];

function App() {
  return (
    <div className="flex items-center justify-center w-full h-dvh bg-black flex-col gap-4">
      <form className="w-full max-w-lg bg-gradient-to-r from-slate-900 to-purple-900 p-10 flex flex-col gap-5 rounded-xl">
        <h1 className="text-white text-3xl font-serif font-normal mb-4">Tell us about your team</h1>
        <Input id="organisation_name" label="What is your company called?" placeholder="Organisation name" />
        <Input id="website_url" label="What is your website url (optional)?" placeholder="https://" />
        <FieldSet legend="I’m signing up for Tiptap because">
          {checkBoxes.map((label) => (
            <CheckBox label={label} />
          ))}
        </FieldSet>
        <FieldSet legend="What is your preferred integration method?">
          {radios.map((label) => (
            <Radio name="integration" label={label} />
          ))}
        </FieldSet>
        <Button>Create team</Button>
      </form>
    </div>
  );
}

export default App;
