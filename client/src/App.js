import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import EventForm from './components/eventForm';
import displayinfo from './components/displayinfo';
import Calender from './components/calander'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/eventForm' component={EventForm} />
        <Route exact path='/displayinfo' component={displayinfo} />
        <Route exact path='/calander' component={Calender} />
      </Switch>
  </BrowserRouter>
    );
  }
}

export default App;
