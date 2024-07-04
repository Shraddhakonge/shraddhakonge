import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import MedicineList from './components/MedicineList.js';
import OrderForm from './components/OrderForm.js';

const App = () => {
  return (
    <Router>
      <div>
        <ToastContainer />
        <Switch>
          <Route path="/Home.js" exact component={Home} />
          <Route path="/login.js" component={Login} />
          <Route path="/register.js" component={Register} />
          <Route path="/medicines.js" component={MedicineList} />
          <Route path="/orderform.js" component={OrderForm} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
