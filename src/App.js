import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";
import Home from "./Home";
import HomePage from "./HomePage";
import CareerPage from "./CareerPage";
import MyForm from "./myform";
import FormSubmit from "./FormSubmit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/form" element={<MyForm />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/formsubmitted" element={<FormSubmit />} />
      </Routes>
      {/* <MyForm /> */}
    </Router>
  );
}

export default App;
