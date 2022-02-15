import React from "react";

// COMPONENTS
import styled from "styled-components";

// IMAGES
import Dashboard from "../../img/dashboard.png"


const SideImage = () => {
    return (
            <Image src={Dashboard} alt="User dashboard"/>
    )
}

export default SideImage;


const Image = styled.img`
    width: 600px;
`;