// import MyForm from "./myform";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TicketForm from "./ticketform";
import Home from "./Home";
import HomePage from "./HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<HomePage />} />

        <Route path="/form" element={<TicketForm />} />
      </Routes>
      {/* <MyForm /> */}
    </Router>
  );
}

export default App;
