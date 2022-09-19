import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CreateSurvey from "./pages/CreateSurvey";
import Main from "./pages/Main";
import ResponseSurvey from "./pages/ResponseSurvey";
import GlobalStyle from "./style/GlobalStyle";
import AddDatePicker from "./pages/AddDatePicker";
import AddRadio from "./pages/AddRadio";
import AddSelect from "./pages/AddSelect";
import AddText from "./pages/AddText";
import { useState } from "react";

function App() {
  const [surveyInfo, setSurveyInfo] = useState({
    title: '',
    description: '',
    formData: [],
    completionNotice: '귀한 시간 내주셔서 감사합니다.'
  })
  const handleData = (data) => {
    setSurveyInfo(data)
  }
  console.log(surveyInfo)
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/create" element={<CreateSurvey surveyInfo={surveyInfo} handleData={handleData}/>}></Route>
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
