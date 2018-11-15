import React, { useMemo } from 'react';
import Child from '../Child';

const Parent = ({ a, b }) => {
  const Cd = useMemo(() => <Child a={a} b={b} />, [a,b]);
  console.log('render parent')
  return (
    <>
      <h2>Hello Parent</h2>
      {Cd}
      {/* <Child a={a} b={b} /> */}
    </>
  );
}

export default Parent;
