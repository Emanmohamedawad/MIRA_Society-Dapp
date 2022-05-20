import React from 'react'
import './header.css';
import CTA from './CTA';
import Me from '../../assets/header.jpg'
import Headersocial from './headersocial';



const Header = () => {
  return(
    <header>
    <div className='container header__container'>
      {/* <h5>The first Arab community</h5> */}
      <h1>MIRA Society</h1>
      {/* <h5 className='text-light'>Head to Opensea to see the Collection.</h5>  */}
      {/* <h5>Address: {defaultAccount}</h5> */}
      <CTA/>
      <Headersocial />

      <div className='me'>
        <img className='img__me' src={Me} alt="me"/>
      </div>

      {/* <a href='#about' className='scroll__down'>Scroll Down</a> */}
    </div>
  </header>
  )
}

export default Header;
