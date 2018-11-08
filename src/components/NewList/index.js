import React, { useState, useContext, useEffect } from 'react';
import ListWrapper from '../ListWrapper';
import { ThemeContext } from '../../context';
import Row from '../Row';

export default function NewList() {
  const firstName = useFormInput('Mary');
  const lastName = useFormInput('Poppins');
  const theme = useContext(ThemeContext);
  const width = useWindowWith();
  useDocTitle(`${firstName.value} ${lastName.value}`)

  return (
    <ListWrapper theme={theme}>
      <Row label="First Name">
        <input {...firstName} />
      </Row>
      <Row label="Last Name">
        <input {...lastName} />
      </Row>
      <Row label="Width">
        <div className="display">{width}</div>
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

function useWindowWith() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    // return a function to unsub
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  });
  return width;
}