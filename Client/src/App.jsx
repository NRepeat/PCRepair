import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Services from "./page/Services";
import Header from "./components/Header";

function App() {
  return (
    <Router>
			<Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services/>} />
      </Routes>
    </Router>
  );
}

export default App;
