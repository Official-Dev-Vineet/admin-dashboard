import logo from "./logo.svg";
import { BrowserRouter, Link, Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <nav style={{color:'#000'}}>
        <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>{" "}
        <li>
          <NavLink to="/about">about</NavLink>
        </li>{" "}
        <li>
          <NavLink to="/contact">contact</NavLink>
        </li>
        </ul>
      </nav>
        <Routes>
          <Route path="/" element={<div> home </div>} />
          <Route path="/about" element={<div> about </div>} />
          <Route path="/contact" element={<div> contact </div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
