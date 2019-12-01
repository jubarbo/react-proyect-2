import React from 'react';
import '../assets/styles/components/Header.scss'

const Header = () => (
    <header className="header">
        <img className="header__img" src="" />
        <div className="header__menu">
            <div className="header__img--profile">
                <img src="../assets/" alt="" />
                <p>Perfil</p>
            </div>
            <ul>
                <li><a href="/">Cuenta</a></li>
                <li><a href="/">Cerrar Sesión</a></li>
            </ul>
        </div>
    </header>
);

export default Header;