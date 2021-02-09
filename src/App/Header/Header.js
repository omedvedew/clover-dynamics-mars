import React from 'react';

import Logo from './Logo/Logo';
import Menu from './Menu/Menu';

const Header = () => {
    return (
        <header className="header row">
            <Logo/>
            <Menu/>
        </header>
    )
}

export default Header;