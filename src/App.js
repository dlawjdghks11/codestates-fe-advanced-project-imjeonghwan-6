import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateSurvey from "./pages/CreateSurvey";
import Main from "./pages/Main";
import ResponseSurvey from "./pages/ResponseSurvey";
import GlobalStyle from "./style/GlobalStyle";
import AddDatePicker from "./pages/AddDatePicker";
import AddRadio from "./pages/AddRadio";
import AddSelect from "./pages/AddSelect";
import AddText from "./pages/AddText";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/create" element={<CreateSurvey />}></Route>
          <Route path="/create/select" element={<AddSelect />}></Route> 
          <Route path="/create/text" element={<AddText />}></Route> 
          <Route path="/create/datepicker" element={<AddDatePicker />}></Route> 
          <Route path="/create/radio" element={<AddRadio />}></Route> 
          <Route path="/response" element={<ResponseSurvey />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
