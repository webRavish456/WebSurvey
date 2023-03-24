import { Route,Routes } from "react-router-dom";
import Survey from "./survey/SurveyComponent/surveycomponent";

function App() {
  return (
     <>
        <Routes>
          <Route path="/" element={<Survey/>}/>
        </Routes>
     </> 
  )
}

export default App;
