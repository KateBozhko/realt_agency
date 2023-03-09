import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Shop from "./Shop";
import Contacts from "./Contacts";
import About from "./About";
function App() {
return(
<div className="main">
   <Router>
      <nav className="header">
         <Link to="/" className="link">
         Shop</Link>
         <Link to="/about" className="link">
         About us</Link>
         <Link to="/contacts" className="link">
         Our contacts</Link>
      </nav>
      <Routes>
         <Route path="/" element={
         <Shop/>
         }/>
         <Route path="/about" element={
         <About/>
         }/>
         <Route path="/contacts" element={
         <Contacts/>
         }/>
      </Routes>
   </Router>
</div>
)
}
export default App;