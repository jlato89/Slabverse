import React from 'react';
import MenuItem from './components/HeaderMenu/HeaderMenu';
import Logo from './components/HeaderLogo/HeaderLogo';

const Header = () => {
  return (
    <div style={{ marginBottom: '15px' }}>
      <Logo />
      <MenuItem />
    </div>
  );
};

export default Header;
