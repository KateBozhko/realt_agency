import "./App.css";
import logo from "./logo.jpg"

function Intro() {
    return(
        <div className="container">
        <div className="title">
            <img className="logo" src={logo} width="50px" alt="logo"/>
        <h1>Find the best house in your life...</h1>
        </div>
<div className="information">
<p>Our professional experts'll find a house according your preferenсes and budget.</p>
</div>
        </div>
    )
}
export default Intro;