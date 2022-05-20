import React from 'react'
import './About.css';
import About_me from '../../assets/About.jpg';

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>MIRA Society</h2>
      <div className='contaniner about__container'>
        <div className='about__me'>
            <div className='about__me-image'>
              <img src={About_me} alt='about_image' />
            </div>
        </div>
        <div className='about__content'>
          <p>
             "The Idea of MIRA arisen from the core of experience of passionate youths in the NFT space, unified by the amazing thoughts of this new world. They were learning gradually and increasing in number day after day. They decided to adopt this simple Idea, but in fact, it was huge through their eyes, which is teaching as many people as possible about the NFT space and guide them on how to avoid scams and rug-pull projects that are increasing in daily basis. MIRA will not be just a PNG collection, but an icon of a community, a strong and solid community in an extraordinary way ,MIRA is not a closed community. "
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
