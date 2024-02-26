// import MyForm from "./myform";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";
import Home from "./Home";
import HomePage from "./HomePage";
// import ContactForm from "./ticketform";
import TicketForm from "./TicketForm";
import CareerPage from "./CareerPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/form" element={<TicketForm />} />
        <Route path="career" element={<CareerPage />} />
      </Routes>
      {/* <MyForm /> */}
    </Router>
  );
}

export default App;
