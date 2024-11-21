import React, { useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";

const Contact = () => {
    const [num, setNum] = useState<number>(0);

    return (
        <div>
            <h1>Contact</h1>
            <div>Contact 페이지입니다.</div>
            <Button 
        label = "add number"
        onClick={() => {
            setNum(num +1);
        }}
        />
       
        <div>{num}</div>
        </div>
    );
};

export default Contact;