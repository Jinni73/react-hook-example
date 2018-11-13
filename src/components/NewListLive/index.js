import React, { useState, useEffect, useContext } from 'react';
import ListWrapper from '../ListWrapper';
import { ThemeContext } from '../../context';
import Row from '../Row';

export default function NewListLive() {
  const firstName = useValues('Harry');
  const lastName = useValues('Potter');
  const theme = useContext(ThemeContext);
  const width = useWindowWidth();

  useDocTitle(firstName.value);

  return (
    <ListWrapper theme={theme}>
      <Row label="First Name">
        <input { ...firstName } />
      </Row>
      <Row label="Last Name">
        <input { ...lastName } />
      </Row>
      <Row label="Width">
        <div className="display">{width}</div>
      </Row>
    </ListWrapper>
  )
}

// Custom hook
function useValues(initVal) {
  const [value, setValue] = useState(initVal);
  function handleOnChange(e) {
    setValue(e.target.value);
  }
  return {
    onChange: handleOnChange,
    value,
  }
}

function useDocTitle(value) {
  // docuemt tilte
  useEffect(() => {
    document.title = value;
  });
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  const handler = () => setWidth(window.innerWidth)
  // window width
  useEffect(() => {
    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('resize', handler);
    }
  });

  return width;
}