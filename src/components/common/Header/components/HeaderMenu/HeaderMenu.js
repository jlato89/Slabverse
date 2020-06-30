import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import menuList from '../../menuList';
import styles from './HeaderMenu.module.css';

const HeaderMenu = () => {
  return (
    <Nav className='justify-content-center'>
      {menuList.map((item, i) =>
        // Check if subMenu is present
        item.subMenu ? (
          <NavDropdown
            title={item.name}
            className='text-dark'
            id='nav-dropdown'
            key={i}
          >
            {item.subMenu.map((subItem, sI) => (
              <NavDropdown.Item href={subItem.location} key={sI}>
                {subItem.name}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        ) : (
          <Nav.Item key={i}>
            <Nav.Link className={styles.navItem} href={item.location}>
              {item.name}
            </Nav.Link>
          </Nav.Item>
        )
      )}
    </Nav>
  );
};

export default HeaderMenu;
