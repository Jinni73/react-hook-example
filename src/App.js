import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import OldList from './components/OldList';
import NewList from './components/NewList';
import NewListLive from './components/NewListLive';
import OldTabby from './components/OldTabby';
// import NewTabby from './components/NewTabby';
import { ThemeContext, ReduxContext } from './context';
import AppReducer from './appReducer';
import './App.css';

function App(){
  const [reduxState, dispatch] = AppReducer();
  
  return (
    <Router>
      <Layout>
        <Route path='/' exact component={Home} />
        <ThemeContext.Provider value="#FF5519">
          <Route path='/old' component={OldList} />
        </ThemeContext.Provider>
        <ThemeContext.Provider value="#346BC8">
          <Route path='/new' component={NewList} />
          <Route path='/new-live' component={NewListLive} />
        </ThemeContext.Provider>
        <ReduxContext.Provider value={{reduxState, dispatch}}>
          <Route path='/old-tabby' component={OldTabby} />
        </ReduxContext.Provider>
      </Layout>
    </Router>
  );
}

export default App;
