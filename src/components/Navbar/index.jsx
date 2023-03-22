import React, { useState, useEffect } from 'react';

import { Nav, Content, Brand, NavItems } from './styles';

import MenuItems from '../MenuItems';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Nav isScrolled={scrolled}>
        <Content>
          <Brand>Tomas Carvalho</Brand>
          <NavItems>
            <MenuItems />
          </NavItems>
        </Content>
      </Nav>
    </>
  );
};

export default Navbar;