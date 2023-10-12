import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import NavBar from "./components/NavigationBar";
import Services from "./page/Services";

function App() {
  return (
    <Router>
			<NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services/>} />
      </Routes>
    </Router>
  );
}

export default App;
