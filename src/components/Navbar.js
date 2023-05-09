import "./NavbarStyles.css"
import { Component } from "react";

class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render(){
    return(
        <>
        <nav>
                <h2>Interactive <span>Portfolio</span> </h2>

                <div>
                    <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About Me</a></li>
                        <li><a href="projects.html">Projects</a></li>
                        <li><a href="contact.html">contact me</a></li>
                        <li><a href="more.html">More on me</a></li>
                        <li><a href="code.html">Code like me</a></li>
                    </ul>
                </div>
                <button>LogIn</button>

                <div id="mobile" onClick={this.handleClick} >
                    <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

        </nav>
        </>
    );
}
}

export default Navbar;