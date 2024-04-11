import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Step from "./Components/Step";
import Demo from "./Components/Demo";
import Donate from "./Components/Donate";
import Success from "./Components/Success";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/step/:id" element={<Step />}></Route>
          <Route exact path="/demo" element={<Demo />}></Route>
          <Route exact path="/donate" element={<Donate />}></Route>
          <Route path="/paymentsuccess/:text" element={<Success />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
