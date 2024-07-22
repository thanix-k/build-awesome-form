import Button from "./components/Button.tsx";
import Input from "./components/Input.tsx";
import { Radio } from "./components/Radio.tsx";

function App() {
  return (
    <div className="flex items-center justify-center w-full h-dvh bg-slate-900 flex-col gap-4">
      <Input label="What is your company called?" placeholder="Organisation name" />
      <Radio name="teamType" label="Company" />
      <Button>Create team</Button>
    </div>
  );
}

export default App;
