import React from 'react'
import Logo from '../../assets/img/logo.png'
import ButtomLink from '../Button/ButtonLink';
import './Menu.css';

function Menu() {
    return(
        <nav className='Menu'>
            <a href='/'>
            <img className='Logo' src={Logo} alt='Logo RootsFlix'></img>
            </a>

            <ButtomLink className="ButtonLink" href='/'>
                Novo Video
            </ButtomLink>
        </nav>
    );
}

export default Menu; 