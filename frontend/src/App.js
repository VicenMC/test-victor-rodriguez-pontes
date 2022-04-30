import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
