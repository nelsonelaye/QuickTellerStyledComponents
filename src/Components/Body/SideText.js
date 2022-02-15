import React from "react";

// COMPONENTS
import styled from "styled-components";
import Button from "../ButtonComponent/Button";
import Headline from "./Headline"
import Paragraph from "./Paragraph"




const SideText = () => {
    return (
            <Text>
                <Headline>All the Tools You Need to Grow Your Business, In One Place.</Headline>
                <Paragraph>Our suite of integrated tools saves you time, so you can focus on growing revenue and delivering exceptional service to your customers.</Paragraph>
            </Text>

    )
}

export default SideText;



const Text = styled.div`
    width: 450px;
    display:flex;
    flex-direction: column;
    justify-content:space-around;

`;
