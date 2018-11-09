import { useReducer } from 'react';

const intialState = {
  visibleTab: 1,
};

function AppReducer(state, action) {
  debugger
  switch (action.type) {
    case 1:
      return { ...intialState, visibleTab: 1 };
    case 2:
      return { ...intialState, visibleTab: 2 };
    case 3:
      return { ...intialState, visibleTab: 3 };
    default:
      return intialState;
  }
}

export default function useRedux() {
  const [state, dispatch] = useReducer(AppReducer, intialState);
  return [state, dispatch ];
}