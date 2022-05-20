import React from 'react';
import './Footer.css';
import {GiSailboat} from 'react-icons/gi';
import {BsDiscord} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';

 const  Footer = () => {
    return(
        <footer>
            <a href='/#' className='footer__logo'>MIRA Society</a>

            <div className="footer__social">
            <a href='https://opensea.io/collection/mira-society' target='_blank' rel="noreferrer"><GiSailboat/></a>
            <a href='https://discord.gg/CsctTqtXYX' target='_blank' rel="noreferrer"><BsDiscord /></a>
            <a href='https://twitter.com/MiraSociety' target='_blank' rel="noreferrer"><BsTwitter /></a>
            </div>
            <div className='footer__copyright'>
                <small>&copy; MIRA Community</small>
            </div>
        </footer>
    )

}

export default Footer;