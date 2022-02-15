import React from "react";

// COMPONENTS
import styled from "styled-components";
import Button from "../ButtonComponent/Button";

// IMAGES
import pos from "../../img/pos.png"
import qr from "../../img/icon-qr-code.svg"
import cash from "../../img/icon-cash.svg"
import transfer from "../../img/icon-transfer.svg"
import ussd from "../../img/icon-ussd.svg"
import cards from "../../img/icon-cards.svg"


import backdrop from "../../img/backdrop.svg"


const Layout3 = () => {
    return (
        <Section>
            <Text>
                <Feature>
                    <BlueBox></BlueBox>
                    <FeatureText>POINT OF SALE TERMINAL</FeatureText>
                </Feature>
                <Headline1>One Card Reader for All Your Payment Needs</Headline1>
                <Paragraph>Introducing the one device for all your payment needs. Whether you're accepting payments at your countertop checkout or looking to accept payments on-the-go, the lightweight and easy to transport Card Reader connects to an array of devices and offers your business the flexibility to accept any type of payment, wherever you are.</Paragraph>
                <ModuleIntro>Payment modules available</ModuleIntro>
                <PaymentModules>
                    <Module>
                        <QR src={qr}  />
                        <ModuleText>QR CODE</ModuleText>
                    </Module>

                    <Module>
                        <ModuleIcon src={cash}  />
                        <ModuleText>CASH</ModuleText>
                    </Module>

                    <Module>
                        <ModuleIcon src={ussd}  />
                        <ModuleText>USSD</ModuleText>
                    </Module>

                    <Module>
                        <ModuleIcon src={cards}  />
                        <ModuleText>CARDS</ModuleText>
                    </Module>

                    <Module>
                        <ModuleIcon src={transfer}  />
                        <ModuleText>TRANSFER</ModuleText>
                    </Module>

                </PaymentModules>
            </Text>
            <Image src={pos} alt="pos"/>
        </Section>
    )
}

export default Layout3;

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
    margin-bottom:0px;
    margin-top:10px;

`;

const Paragraph = styled.p`
    font-size: 15px;
    line-height: 25px;
    
`;

const ModuleIntro = styled.span `
    font-size:14px;
`;

const PaymentModules = styled.div`
    display:flex;
    flex-direction:row;
    margin-top:30px;
    /* justify-content:space-between; */

`;

const Module = styled.div`
    display:flex;
    flex-direction:column;
    margin-right: 50px;
`;

const ModuleIcon = styled.img`
    width:40px;
    margin-bottom: 10px;
`;

const QR = styled.img`
     width:20px;
    margin-bottom: 10px; 
`;

const ModuleText = styled.span`
    font-size:10px;
`;

const Image = styled.img`
    width: 600px;
    /* background-image: url({backdrop}); */
`;