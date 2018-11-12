import React from 'react';
import styled from 'styled-components';

const TabContentWrapper = styled.div`
  display: ${props => props.isVisble ? 'block' : 'none'};
`;

function TabContent({ isVisble, children }){
  return (
    <TabContentWrapper isVisble={isVisble}>
      { children() }
    </TabContentWrapper>
  );
}

export default TabContent;
