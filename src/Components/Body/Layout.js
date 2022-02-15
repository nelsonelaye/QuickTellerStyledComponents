import React from "react";

// COMPONENTS
import styled from "styled-components";
import Button from "../ButtonComponent/Button";

// IMAGES
import Dashboard from "../../img/dashboard.png"


const Layout = () => {
    return (
        <Section>
            <Text>
                <Headline1>All the Tools You Need to Grow Your Business, In One Place.</Headline1>
                <Paragraph>Our suite of integrated tools saves you time, so you can focus on growing revenue and delivering exceptional service to your customers.</Paragraph>
                <Button></Button>
            </Text>
            <Image src={Dashboard} alt="User dashboard"/>
        </Section>
    )
}

export default Layout;

const Section = styled.div `
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    margin-top: 30px;
    padding-right:50px;
    padding-left: 50px;
    
`;

const Text = styled.div`
    width: 450px;
    display:flex;
    flex-direction: column;
    justify-content:space-around;

`;

const Headline1 = styled.h1`
    font-size: 35px;
    line-height: 50px;
    font-weight: 500;
    margin-bottom:0px;

`;

const Paragraph = styled.p`
    font-size: 16px;
    opacity: 0.7;
    line-height: 25px;
    
`;

const Image = styled.img`
    width: 600px;
`;