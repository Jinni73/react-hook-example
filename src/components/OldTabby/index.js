import React, { useContext, useEffect, useState } from 'react';
import TabbyContainer from '../TabbyContainer';
import TabContent from '../TabContent';
import Tabs from '../Tabs';
import { ReduxContext } from '../../context';
// import { unstable_createResource } from 'react-cache';
import APIResource from '../../APIResrouce';

export default function OldTabby() {
  const {reduxState} = useContext(ReduxContext);
  const { visibleTab } = reduxState;
  const users = useUserData('https://reqres.in/api/users?page=2');

  return (
    <TabbyContainer>
      <Tabs />
      <TabContent isVisble={visibleTab===1}>
        {
          () => users.map((ud) => (
            <React.Fragment key={ud.id}>
              <img key={ud.id+'avarter'} src={ud.avatar} alt={ud.first_name}/>
              <span key={ud.id+ud.first_name+ud.last_name}>
                {ud.first_name + ' ' + ud.last_name}
              </span>
            </React.Fragment>
          ))
        }
      </TabContent>
      <TabContent isVisble={visibleTab===2}>
        { () => <div>2wwwewe</div> }
      </TabContent>
      <TabContent isVisble={visibleTab===3}>
        { () => <div>3wwwewe</div> }
      </TabContent>
    </TabbyContainer>
  );
}

function useUserData(path) {
  const [users, setUsers] = useState([]);
  const userPromise = APIResource.read(path);
  useEffect(() =>{  
    userPromise.then(res => {
      setUsers(res.data);
    });
  }, [path]);
  return users;
}
