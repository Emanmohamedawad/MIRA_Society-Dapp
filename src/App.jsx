import React from 'react'
import Header from './companents/Header/header';
import Nav from './companents/Nav/Nav';
import About from './companents/About/About';
 import Team from './companents/Team/Team';
//import Team from './companents/TeamT/Teamsection';
import Roadmap from './companents/Roadmap/Roadmap';
import FQA from './companents/FAQ/FAQ';
import Footer from './companents/Footer/Footer';
//import Desins from './companents/Desines/Desin';



const App = () =>{

    return(
        <>
            {/* <Desins /> */}
            <Header />
            <Nav />
            <About /> 
            <Team /> 
            <Roadmap />
            <FQA />
            <Footer/> 
        </>
    )
}

export default App