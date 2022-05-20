import React from 'react'
import './Nav.css';
import {AiOutlineHome} from 'react-icons/ai';
//import {BsDiscord} from 'react-icons/bs';
import {FiBookOpen} from 'react-icons/fi';
//import {RiRoadMapLine} from 'react-icons/ri';
import {BsQuestionSquare} from 'react-icons/bs';
import {AiOutlineTeam} from 'react-icons/ai';
import {BsBookmarkCheck} from 'react-icons/bs';
import {useState} from 'react';

function Nav() {
  const [activeNav ,setActiveNav] =useState('#')
  return (
        <nav>
            <a href='/#' onClick={() =>  setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
            {/* <a href='#'><BsDiscord /></a> */}
            <a href='#about' onClick={() =>  setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><FiBookOpen /></a>
            <a href='#team' onClick={() =>  setActiveNav('#team')} className={activeNav === '#team' ? 'active' : ''} ><AiOutlineTeam /></a>
            <a href='#Roadmap' onClick={() =>  setActiveNav('#Roadmap')} className={activeNav === '#Roadmap' ? 'active' : ''} ><BsBookmarkCheck /></a>
            <a href='#fqa' onClick={() =>  setActiveNav('#fqa')} className={activeNav === '#fqa' ? 'active' : ''} ><BsQuestionSquare /></a>
        </nav>
  );
}

export default Nav;