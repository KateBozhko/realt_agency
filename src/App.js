import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {data} from "./data";
import Shop from "./Shop";
import Contacts from "./Contacts";
import About from "./About";
import image from "./logo.jpg"


function App() {
  return(
    
<Router>
<nav>
<Link to="/" className="link">Shop</Link>
<Link to="/about" className="link">About us</Link>
<Link to="/contacts" className="link">Our contacts</Link>
</nav>
<Routes>
<Route path="/" element={<Shop/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contacts" element={<Contacts/>}/>
</Routes>
</Router>

  );
}
export default App;