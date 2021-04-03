import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FrontEnd from './pages/FrontEnd';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className='container mt-4'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/handle-frontend' component={FrontEnd} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
