import React  from "react";
import styled from "styled-components"

const Button = ()=> {
    return(
        <Hold>
            Get Started
        </Hold>
    )
}

export default Button;

const Hold= styled.div`
    background-color: #009fe4;
    border: none;
    color: #fff;
    width:150px;
    height:40px;
    display:flex;
    align-items: center;
    justify-content:center;
    border-radius:3px;
    /* padding: 12px 25px; */
    cursor:pointer;
    font-size:14px;

`;