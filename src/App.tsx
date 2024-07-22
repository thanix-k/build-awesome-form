import Button from "./components/Button.tsx";
import Input from "./components/Input.tsx";

function App() {
  return (
    <div className="flex items-center justify-center w-full h-dvh bg-gradient-to-r from-slate-900 to-purple-900 flex-col gap-4">
      <Input label="What is your company called?" placeholder="Organisation name" />
      <Button>Create team</Button>
    </div>
  );
}

export default App;
