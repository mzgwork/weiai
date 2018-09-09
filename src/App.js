import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import HeaderTop from './components/headerTop'
import AppFooter from './components/appFooter'
import Home from './pages/home.jsx'
import About from './pages/about'
import Reason from './pages/reason'
import CasePage from './pages/casePage'
import Problem from './pages/problem'
import News from './pages/news'
class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderTop/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/reason' component={Reason}/>
          <Route path='/casePage' component={CasePage}/>
          <Route path='/problem' component={Problem}/>
          <Route path='/news' component={News}/>
        </Switch>
        <AppFooter />
      </div>
    );
  }
}

export default App;
