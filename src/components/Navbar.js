import "./NavbarStyles.css"

function Navbar(){
    return(
        <>
        <nav>
                <h2>Interactive <span>Portfolio</span> </h2>

                <div>
                    <ul id="navbar">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="index.html">About Me</a></li>
                        <li><a href="index.html">Projects</a></li>
                        <li><a href="index.html">contact me</a></li>
                        <li><a href="index.html">More on me</a></li>
                        <li><a href="index.html">Code like me</a></li>
                    </ul>
                </div>
                <button>LogIn</button>
        </nav>
        </>
    )
}

export default Navbar;