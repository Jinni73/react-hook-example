import React from 'react';
import styled from 'styled-components';
import Nav from '../Nav';

const LayoutWrapper = styled.div`
  background-color: #282c34;
  height: 100vh;
  padding: 1px;
  position: relative;
  color: white;
  a {
    color: white;
  }
`;

const Layout = ({ children }) => (
  <LayoutWrapper>
    <Nav />
    {children}
  </LayoutWrapper>
);

export default Layout;
