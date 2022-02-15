import React from "react";

// COMPONENTS
import styled from "styled-components";
import Button from "../ButtonComponent/Button";

// IMAGES
import connnect from "../../img/connect.png"


const Layout4 = () => {
    return (
        <Section>
            <Image src={connnect} alt="Lady"/>
            <Text>
                <Headline1>We’re Here to Help You Get Started.</Headline1>
                <Paragraph>Connect with our Sales team for one-on-oneassistance with getting started.</Paragraph>
                <Button></Button>
                <Paragraph>We’ll call you within one business day, between 9 a.m. and 5 p.m. in your time zone. If we can’t reach you, we’ll send an email with a phone number to call us back.</Paragraph>
                                
            </Text>
            
        </Section>
    )
}

export default Layout4;

const Section = styled.div `
    display:flex;
    flex-direction: row;
    /* justify-content:space-between; */
    align-items: center;
    margin-top: 70px;
    padding: 50px;
    background-color: #F5FBFE;
    
`;

const Text = styled.div`
    width: 450px;
    display:flex;
    flex-direction: column;
    justify-content:space-between;

`;


const Headline1 = styled.h1`
    font-size:28px;
    line-height: 50px;
    font-weight: 500;
    margin-bottom:10px;
    margin-top:20px;
    color: #003c58;

`;
const Paragraph = styled.p`
    font-size: 13px;
    line-height: 25px;
    
`;


const Image = styled.img`
    width: 500px;
    margin-right: 50px;
    
`;