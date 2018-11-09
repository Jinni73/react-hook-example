import React from 'react';
import TabbyContainer from '../TabbyContainer';
import TabContent from '../TabContent';
import Tabs from '../Tabs';
import AppReducer from '../../appReducer';

export default function OldTabby() {
  const [ reduxState, dispatch ] = AppReducer();
  const { visibleTab } = reduxState;

  return (
    <TabbyContainer>
      <Tabs />
      <button onClick={ () => dispatch({ type: 2 }) } >222</button>
      <TabContent isVisble={visibleTab===1}>
        tab 1 content
      </TabContent>
      <TabContent isVisble={visibleTab===2}>
        tab 2 content
      </TabContent>
      <TabContent isVisble={visibleTab===3}>
        tab 3 content
      </TabContent>
    </TabbyContainer>
  );
}
