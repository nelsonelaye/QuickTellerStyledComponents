import React from "react";

// COMPONENTS
import styled from "styled-components";

// IMAGES
import storefront from "../../img/storefront.png"
import solution from "../../img/solutions-icon.svg"
import sell from "../../img/selling-icon.svg"
import fee from "../../img/fee-icon.svg"


const Center = () => {
    return (
        <Section>
            <Text>
                <Headline1>With Storefront You Now Have Everything You Need to Sell Online with ease</Headline1>
                <Paragraph>Set up a fully-hosted online store in just minutes. The online store was designed with you in mind, meaning you don't need to hire any web designers or programmers to get started.
                <Underline>Let's get started</Underline>
                </Paragraph> 
            </Text>
            <Image src={storefront} alt="catalogue"/>

            <Storefront>
                <StoreFeature>
                    <StoreIcon src={sell} />
                    <StoreHead>Start Selling Online</StoreHead>
                    <StoreDescript>Easily sell online and ship orders to customers, offer in-shop pickup, or local delivery—no matter what type of business you have.</StoreDescript>
                </StoreFeature>

                <StoreFeature>
                    <StoreIcon src={fee} />
                    <StoreHead>Start Selling Online</StoreHead>
                    <StoreDescript>Easily sell online and ship orders to customers, offer in-shop pickup, or local delivery—no matter what type of business you have.</StoreDescript>
                </StoreFeature>

                <StoreFeature>
                    <StoreIcon src={solution} />
                    <StoreHead>Start Selling Online</StoreHead>
                    <StoreDescript>Easily sell online and ship orders to customers, offer in-shop pickup, or local delivery—no matter what type of business you have.</StoreDescript>
                </StoreFeature>
            </Storefront>
        </Section>
    )
}

export default Center;

const Section = styled.div `
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    margin-top: 50px;
    padding: 50px;
    background-color: #F5FBFE;
    
`;

const Text = styled.div`
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    margin-top: 30px;
    margin-bottom:30px;

`;


const Headline1 = styled.h1`
    font-size:25px;
    line-height: 40px;
    font-weight: 500;
    margin:0;
    width: 350px;

`;

const Paragraph = styled.p`
    font-size: 15px;
    line-height: 25px;
    width: 550px;
    
`;

const Underline = styled.div`
    text-decoration: underline;
    cursor:pointer;
    margin-top:20px;
`;

const Image = styled.img`
    width: 100%;

`;

const Storefront = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    justify-content:space-between;
`;

const StoreFeature = styled.div`
    width: 320px;
    margin-top:50px;
    display:flex;
    flex-direction:column;
`;

const StoreIcon = styled.img`
    width:30px;
`;

const StoreHead = styled.h3`
    font-size:18px;
    color: #003c58;
    margin-bottom: 5px;
`;

const StoreDescript = styled.p`
    font-size:17px;
    font-weight:300;
    line-height:30px;
`;