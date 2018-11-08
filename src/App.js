import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import OldList from './components/OldList';
import NewList from './components/NewList';
import { ThemeContext } from './context';
import './App.css'
class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Route path='/' exact component={Home} />
          <ThemeContext.Provider value="#FF5519">
            <Route path='/old' component={OldList} />
          </ThemeContext.Provider>
          <ThemeContext.Provider value="#346BC8">
            <Route path='/new' component={NewList} />
          </ThemeContext.Provider>
        </Layout>
      </Router>
    );
  }
}

export default App;
