import React, { useState, useContext, useEffect, useMemo } from 'react';
import ListWrapper from '../ListWrapper';
import { ThemeContext } from '../../context';
import Row from '../Row';
import Parent from '../Parent';

export default function NewList() {
  const firstName = useFormInput('Mary');
  const lastName = useFormInput('Poppins');
  const theme = useContext(ThemeContext);
  const width = useWindowWidth();
  useDocTitle(`${firstName.value} ${lastName.value}`)
  // console.log('width', width)

  // 记住promos，避免不必要的re-render
  const childFn = useMemo(() => (
    <Row label="First Name">
      <input {...firstName} />
    </Row>
  ), [firstName]);

  const childLn = useMemo(() => (
    <Row label="Last Name">
      <input {...lastName} />
    </Row>
  ), [lastName]);

  return (
    <ListWrapper theme={theme}>
      {childFn}
      {childLn}
      <Row label="Width">
        <div className="display">{width}</div>
      </Row>
      <Row label="memo">
        <Parent a="hello" b="child" />
      </Row>
    </ListWrapper>
  );
}

function useFormInput(initVal) {
  const [value, setValue] = useState(initVal);
  function handleChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange,
  }
}

function useDocTitle(title) {
  useEffect(() => {
    document.title = title;
  });
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    // setTimeout(() => {
    //   handleResize();
    // }, 1000)
    // return a function to unsub
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  });
  // console.log('*****', width)
  return width;
}