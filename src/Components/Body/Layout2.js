import React from "react";

// COMPONENTS
import styled from "styled-components";
import Button from "../ButtonComponent/Button";

// IMAGES
import payment from "../../img/payment-confirmation.png"
import invoice from "../../img/invoice.png"
import check from "../../img/check-mark.svg"


const Layout2 = () => {
    return (
        <Section>

            <Image src={invoice} alt="invoice and payment confirmation"/>
            <Text>
                <Feature>
                    <BlueBox></BlueBox>
                    <FeatureText>INSTANT PAYMENT </FeatureText>
                </Feature>
                <Headline1>Built to Save Timeand Get You Paid Faster</Headline1>
                <Paragraph>Send professional invoices, track them in real time, and accept payments online—all from one place. Save time with auto-billing, stored information, and powerful reporting tools. Customers can pay in one click. They can pay an online invoice through their computer, in person, or right through their phone.</Paragraph>
                <Checks>
                    <CheckItem>
                        <CheckIcon src={check}  />
                        <CheckText>payments Links</CheckText>
                    </CheckItem>

                    <CheckItem>
                        <CheckIcon src={check}  />
                        <CheckText>Invoices</CheckText>
                    </CheckItem>

                    <CheckItem>
                        <CheckIcon src={check}  />
                        <CheckText>Subscriptions</CheckText>
                    </CheckItem>

                </Checks>
            </Text>
            
        </Section>
    )
}

export default Layout2;

const Section = styled.div `
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    margin-top: 50px;
    padding: 50px;
    background-color: #fff;
    
`;

const Text = styled.div`
    width: 450px;
    display:flex;
    flex-direction: column;
    justify-content:center;

`;

const Feature = styled.div `
    display:flex;
    flex-direction:row;
    align-items: center;

`;

const BlueBox = styled.div`
    width:10px;
    height:10px;
    background-color: #009fe4;
    margin-right: 30px;
`;

const FeatureText = styled.span`
    font-size: 13px;
    font-weight: 100;
    color: #003c58;

`;

const Headline1 = styled.h1`
    font-size: 35px;
    line-height: 50px;
    font-weight: 500;
    margin-bottom:10px;
    margin-top:20px;

`;

const Paragraph = styled.p`
    font-size: 15px;
    line-height: 25px;
    
`;

const Checks = styled.div`
    display:flex;
    flex-direction: row;
    flex-Wrap:wrap;
    margin-top: 30px;
`;

const CheckItem = styled.div`
    margin: 0px 40px 30px 0px;
    display:flex;
    align-items: center;
    flex-direction: row;
`;

const CheckIcon = styled.img`
    width:15px;
    margin-right:10px;
`;

const CheckText = styled.span`
    font-size:14px;

`;

const Image = styled.img`
    width: 350px;
`;