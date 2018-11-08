import React from 'react';
import styled from 'styled-components';

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  .label {
    flex: 1;
    box-sizing: border-box;
    padding-top: 15px;
    border-bottom: 2px dashed lightgrey;
  }
  input, .display {
    flex: 2;
    border: 0;
    width: 100%;
    height: 25px;
    line-height: 10px;
    font-size: 2rem;
    border-bottom: 2px dashed lightgrey;
    padding: 25px;
    text-align: center;
    box-sizing: border-box;
    color: white;
    font-family: "Input Mono";
    outline: none;
  }
`;

const Row = ({ children, label }) => (
  <RowWrapper>
    <div className="label">{label}</div>
    {children}
  </RowWrapper>
);

export default Row;
