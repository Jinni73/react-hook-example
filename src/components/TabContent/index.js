import React from 'react';
import styled from 'styled-components';

const TabContentWrapper = styled.div`
  display: ${props => props.isVisble ? 'flex' : 'none'};
  section {
    display: flex;
    margin-right: 10px;
    border: 1px solid white;
    justify-content: space-between;
    flex: 1;
    flex-direction: column;
    text-align: center;
  }

  button {
    cursor: pointer;
  }
  
  input {
    height: 25px;
    line-height: 25px;
  }
`;

function TabContent({ isVisble, children }){
  return (
    <TabContentWrapper isVisble={isVisble}>
      { children() }
    </TabContentWrapper>
  );
}

export default TabContent;
