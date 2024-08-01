import { TeamForm, TeamFormData} from "./stories/components/TeamForm/TeamForm"

function App() {
  return (
    <div className="flex items-center justify-center w-full h-dvh">
     <TeamForm onSubmit={(values: TeamFormData) => {
       console.log("form values: ", values);
     }}/>
    </div>
  )
}

export default App
