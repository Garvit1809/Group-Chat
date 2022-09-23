import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.div`
width: 100%;
height: 4rem;
display: flex;
align-items: center;
justify-content: space-between;
`;

const Logo = styled.h1`
margin-left: 4rem;
`;

const MenuItems = styled.ul`
display: flex;
align-items: center;
justify-content: space-between;
list-style: none;
margin-right: 4rem;
`;

const MenuItem = styled.li`
margin-right: 1.5rem;
`;

const Navbar = () => {
  return (
    <Section>
      <Logo>TeachersHub</Logo>
      <MenuItems>
        <MenuItem><Link to="/" >Home</Link></MenuItem>
        <MenuItem><Link to="/teachers" >Teachers</Link></MenuItem>
        <MenuItem><Link to="/resources" >Resources</Link></MenuItem>
        <MenuItem><Link to="/profile" >Profile</Link></MenuItem>
      </MenuItems>
    </Section>
  );
};

export default Navbar;
