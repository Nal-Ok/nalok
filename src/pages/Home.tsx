import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";

const Home = () => {
    return(
    <div>
        <h1>welcome to our website</h1>
        <Button 
        label = "alert 띄우기"
        onClick={() => {
            alert("welcome to my Home page");
        }}
        />
    </div>
    );
};

export default Home;