import './App.css';

//  IMPORT COMPONENTS AND STYLED-COMPONENTS
import styled from "styled-components";
import Header from "./Components/Header/Header"
import Layout  from './Components/Body/Layout';
import Layout1  from './Components/Body/Layout1';
import Layout2  from './Components/Body/Layout2';
import Layout3 from './Components/Body/Layout3';
import Layout4 from './Components/Body/Layout4';
import Center from './Components/Body/Center';



// import SideImage from "./Components/Body/SideImage"
// import SideText from "./Components/Body/SideText"
// import Headline from "./Components/Body/Headline"
// import Paragraph from "./Components/Body/Paragraph"




//  IMPORT IMAGES
import multiChoice from "./img/multi-choice.png"
import oando from "./img/oando.png";
import betking from "./img/betking.png";
import dominos from "./img/dominos.png";
import konga from "./img/konga.png";



function App() {
  return (
    <div className="App">
     <Header/>
     <Layout></Layout>

     <Brands>
      <BrandHeadline>TRUSTED BY BRANDS YOU TRUST</BrandHeadline>
      <BrandHolder>
        <BrandLogo src={multiChoice} />
        <BrandLogo src={oando} />
        <BrandLogo src={dominos} />
        <BrandLogo src={konga} />
        <BrandLogo src={betking} />
      </BrandHolder>
     </Brands>

      <Layout1></Layout1>

      <Layout2></Layout2>
      <Center></Center>
      <Layout3></Layout3>
      
      <Layout4></Layout4>


    </div>
  );
}

export default App;

const Brands = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  width:100%;
  margin-top: 50px;
  margin-bottom: 50px;

`;

const BrandHeadline = styled.h6`
    font-size: .65rem;
    letter-spacing: 1.8px;
    font-weight: bolder;
    color: #888;
    margin-bottom: 10px;  
`;

const BrandHolder = styled.div`
  display:flex;
  flex-direction:row;
  align-items: center;justify-content:center;
`;

const BrandLogo = styled.img `
  width:50px;
  margin-right: 30px;
`;

const Section = styled.div `
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    margin-top: 30px;
    padding-right:50px;
    padding-left: 50px;
    
`;