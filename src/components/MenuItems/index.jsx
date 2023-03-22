import React from 'react';
import { Link } from 'react-scroll';

import { MenuList, MeunListItem } from './styles';

const MenuItems = () => {
  return (
    <MenuList>
      <MeunListItem>
        <Link to="home" smooth duration={500}>
          Home
        </Link>
      </MeunListItem>
      <MeunListItem>
        <Link to="about" smooth duration={500}>
          About
        </Link>
      </MeunListItem>
      <MeunListItem>
        <Link to="services" smooth duration={500}>
          Services
        </Link>
      </MeunListItem>
      <MeunListItem>
        <Link to="blog" smooth duration={500}>
          Blog
        </Link>
      </MeunListItem>
      <MeunListItem>
        <Link to="projects" smooth duration={500}>
          Projects
        </Link>
      </MeunListItem>
      <MeunListItem>
        <Link to="contact" smooth duration={500}>
          Contact
        </Link>
      </MeunListItem>
    </MenuList>
  );
};

export default MenuItems;