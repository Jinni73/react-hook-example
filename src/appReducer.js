import { useReducer } from 'react';

const intialState = {
  visibleTab: 1,
};

function AppReducer(state, action) {
  switch (action.type) {
    case 1:
      return { ...state, visibleTab: 1 };
    case 2:
      return { ...state, visibleTab: 2 };
    case 3:
      return { ...state, visibleTab: 3 };
    default:
      return state;
  }
}

export default function useRedux() {
  const [state, dispatch] = useReducer(AppReducer, intialState);
  return [state, dispatch ];
}