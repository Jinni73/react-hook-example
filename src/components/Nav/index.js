import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavWrapper = styled.nav`
  position: absolute;
  right: 20px;
  bottom: 20px;
  a {
    margin: 5px
  }
`;

const Nav = () => (
  <NavWrapper>
    <Link to="/">Home</Link>
    <Link to="/old">Old</Link>
    <Link to="/new">New</Link>
  </NavWrapper>
);

export default Nav;
