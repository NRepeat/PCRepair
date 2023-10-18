import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Services from "./page/Services";
import Header from "./components/Header";
import Contacts from "./page/Contacts";

function App() {
  return (
    <Router>
			<Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/сontacts" element={<Contacts/>} />
      </Routes>
    </Router>
  );
}

export default App;
