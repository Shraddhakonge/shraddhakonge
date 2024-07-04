import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home.js';
import Login from './components/login.js';
import Register from './components/register.js';
import MedicineList from './components/medicinelist.js';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/Home.js" exact component={Home} />
        <Route path="/login.js" component={Login} />
        <Route path="/register.js" component={Register} />
        <Route path="/medicinelist.js" component={MedicineList} />
      </Switch>
    </Router>
  );
};

export default App;

