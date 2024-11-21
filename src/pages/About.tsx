import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';

const About = () => {
    return(
        <div>
            <h1>About us</h1>
            <div>About 페이지입니다.</div>
            <Button 
        label = "console.log 띄우기"
        onClick={() => {
            alert("welcome to my Home page");
        }}
        />
        </div>
    );
};

export default About;