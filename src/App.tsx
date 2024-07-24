import UserForm from "./Form";

function App() {
  return (
    <>
      {" "}
      <h1 className="text-3xl">Tell us about your team</h1>
      <div className="flex items-center justify-center w-full h-dvh">
        <UserForm />
      </div>
    </>
  );
}

export default App;
