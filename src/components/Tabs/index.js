import React, { useContext } from 'react';
import styled from 'styled-components';
import { ReduxContext } from '../../context';

const TabsWrapper = styled.div`
  display: flex;
  width: 270px;
  justify-content: space-between;
  .tab {
    padding: 15px;
    background: #E8373F;
    box-sizing: border-box;
    cursor: pointer;
  }
`;

export default function Tabs() {
  const {dispatch} = useContext(ReduxContext);

  const handleTabSwitch = (tabIndex) => dispatch({ type: tabIndex });

  return (
    <TabsWrapper>
      <div
        className="tab"
        onClick={() => { handleTabSwitch(1); }}
      >Summary</div>
      <div
        className="tab"
        onClick={() => { handleTabSwitch(2); }}
      >Stats</div>
      <div
        className="tab"
        onClick={() => { handleTabSwitch(3); }}
      >Review</div>
    </TabsWrapper>
  );
}
