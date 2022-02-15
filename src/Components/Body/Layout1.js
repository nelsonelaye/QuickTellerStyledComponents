import React from "react";

// COMPONENTS
import styled from "styled-components";
import Button from "../ButtonComponent/Button";

// IMAGES
import integration from "../../img/integration.png"
import check from "../../img/check-mark.svg"


const Layout1 = () => {
    return (
        <Section>
            <Text>
                <Feature>
                    <BlueBox></BlueBox>
                    <FeatureText>MULTIPLE PAYMENT CHANNELS</FeatureText>
                </Feature>
                <Headline1>Get Paid Securely, How and When You Want</Headline1>
                <Paragraph>As with all of our tools, payments are central to the experience. Even with online payments, you benefit from our lower rates and fast deposits. Quickteller business seamlessly integrates with your existing website or store and we provide various payment options.</Paragraph>
                <Checks>
                    <CheckItem>
                        <CheckIcon src={check}  />
                        <CheckText>Cards</CheckText>
                    </CheckItem>

                    <CheckItem>
                        <CheckIcon src={check}  />
                        <CheckText>USSD</CheckText>
                    </CheckItem>

                    <CheckItem>
                        <CheckIcon src={check}  />
                        <CheckText>Bank Transfer</CheckText>
                    </CheckItem>

                    <CheckItem>
                        <CheckIcon src={check}  />
                        <CheckText>QR</CheckText>
                    </CheckItem>

                    <CheckItem>
                        <CheckIcon src={check}  />
                        <CheckText>Paycode</CheckText>
                    </CheckItem>

                    <CheckItem>
                        <CheckIcon src={check}  />
                        <CheckText>Mobile Money</CheckText>
                    </CheckItem>
                </Checks>
            </Text>
            <Image src={integration} alt="Integration"/>
        </Section>
    )
}

export default Layout1;

const Section = styled.div `
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    margin-top: 70px;
    padding: 50px;
    background-color: #F5FBFE;
    
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
    margin-top:30px;
`;

const CheckItem = styled.div`
    margin: 0px 50px 30px 0px;
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
    width: 600px;
`;