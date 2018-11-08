import React from 'react';
import styled from 'styled-components';

const ListWrapper = styled.div`
  input {
    background-color: ${props => props.theme}
  }
  margin: 5vh;
  width: 85vw;
  padding: 0;
  background-color: #556666;
`

const List = ({ children, theme }) => (
  <ListWrapper theme={theme}>
    {children}
  </ListWrapper>
);

export default List;
