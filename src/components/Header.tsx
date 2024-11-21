import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header style={{padding:'10px', textAlign: "center"}}>
            <nav>
                <Link to="/" style = {{margin: "0 10px"}}>
                Home
                </Link>
                <Link to="/about" style = {{margin: "0 10px"}}>
                about
                </Link>
                <Link to="/contact" style = {{margin: "0 10px"}}>
                contact
                </Link>
                <Link to="/todolist" style = {{margin: "0 10px"}}>
                Todo list
                </Link>
            </nav>
        </header>
    );
};

export default Header;