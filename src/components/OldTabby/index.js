import React, { useContext, useEffect, useState, useRef } from 'react';
import TabbyContainer from '../TabbyContainer';
import TabContent from '../TabContent';
import Tabs from '../Tabs';
import { ReduxContext } from '../../context';
// import { fromJS } from 'immutable';
// import { unstable_createResource } from 'react-cache';
import APIResource from '../../APIResrouce';

export default function OldTabby() {
  const {reduxState} = useContext(ReduxContext);
  const { visibleTab } = reduxState;
  const users = useUserData('https://reqres.in/api/users?page=2');
  const inputElm = useRef();

  console.log(users);

  function onBtnClick() {
    inputElm.current.focus();
  }

  return (
    <TabbyContainer>
      <Tabs />
      <TabContent isVisble={visibleTab===1}>
        {
          () => users.map((ud) => (
            <section key={ud.id}>
              <img
                key={ud.id+'avarter'}
                src={ud.avatar}
                alt={ud.first_name}
              />
              <span key={ud.id+ud.first_name+ud.last_name}>
                {ud.first_name + ' ' + ud.last_name}
              </span>
            </section>
          ))
        }
      </TabContent>
      <TabContent isVisble={visibleTab===2}>
        {
          () => (
            <>
              <input ref={inputElm} />
              <button onClick={onBtnClick}>Focus</button>
            </>
          )
        }
      </TabContent>
      <TabContent isVisble={visibleTab===3}>
        { () => <div>Tab 3 content</div> }
      </TabContent>
    </TabbyContainer>
  );
}

// function useUserData(path) {
//   const [users, setUsers] = useState([]);
//   const userPromise = APIResource.read(path);
//   useEffect(() =>{  
//     userPromise.then(res => {
//       setUsers(res.data);
//     });
//   }, [path]);
//   return users;
// }

function useUserData(path) {
  const [users, setUsers] = useState([]);
  function handleUsers(users) {
    setUsers(users);
  }

  useEffect(() => {  
    APIResource.readProm(path, handleUsers);
  }, [path]);
  
  return users;
}
