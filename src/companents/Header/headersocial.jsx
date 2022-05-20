import React from 'react';
import {GiSailboat} from 'react-icons/gi';
import {BsDiscord} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';

const headersocial = () => {
  return (
    <div className='header__social'>
        <a href='https://opensea.io/collection/mira-society' target='_blank' rel="noreferrer"><GiSailboat/></a>
        <a href='https://discord.gg/CsctTqtXYX' target='_blank' rel="noreferrer"><BsDiscord /></a>
        <a href='https://twitter.com/MiraSociety' target='_blank' rel="noreferrer"><BsTwitter /></a>
      
    </div>
  );
}

export default headersocial;
