import React from "react";
import styled from "styled-components";
import Button from "../ButtonComponent/Button";
import logo from "../../img/app-logo.svg"

const Header = () => {
    return(<Wrap>
            <Logo src={logo} alt="Quickteller logo" />
            <Navhold>
                <Nav>Overview</Nav>
                <Nav>Storefront</Nav>
                <Nav>Pricing</Nav>
                <Nav>Checkout Demo</Nav>
                <Nav>Developers</Nav>

            </Navhold>
            <Clicks>
                <Sign>Sign In</Sign>
                <Button></Button>
            </Clicks>
            
        </Wrap>
    )
}

export default Header;

const Wrap = styled.div`
    background-color: #fff;
    height: 70px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding-left:50px;
    padding-right:80px;
    font-size: 14px;
    font-weight: 500;
`;

const Logo = styled.img `
    width: 180px;
    margin-right:auto;
`;

const Navhold = styled.div`
    display:flex;
    margin-right:30px;
`;

const Nav = styled.div`
    color:#003c58;
    margin: 10px;
    cursor:pointer;
`;

const Clicks = styled.div`
    display:flex;
    flex-direction: row;
    align-items:center;
    justify-content:center;
    margin-left: 50px;
`;

const Sign = styled.div`
    color: #009FE4;
    cursor:pointer;
    margin-right:30px;

`;



// primary-background-color:  #01354b;