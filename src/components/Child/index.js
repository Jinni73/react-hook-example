import React, { memo } from 'react';

// const Child = memo(({a,b}) => {
//   console.log('render child')
//   return <div>{a + b}</div>
// });

const Child = ({a,b}) => {
  console.log('render child')
  return <div>{a + b}</div>
};

export default Child;