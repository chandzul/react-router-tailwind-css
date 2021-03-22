import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import './App.css';

import Nav from "./components/Nav";
import Home from './pages/front/Home'
import Courses from './pages/front/Courses';
import Events from './pages/front/Events';
import Login from './pages/front/Login';
import Signup from './pages/front/Signup';
import NavLogin from './components/NavLogin';
import NavSignup from './components/NavSignup';
import NavDashboard from './components/NavDashboard';
import Footer from './components/Footer';

function App() {
  
  const [loggon, setLoggon] = useState(false);

  return (
    <Router>

      {
        (loggon) ?
        <div className="App">
          <NavDashboard />
        </div>
        :
        <div className="App" >
          <Switch>
            <Route path="/" exact>
              <Nav />
              <Home />
              <Footer />
            </Route>
            <Route path="/courses" exact>
              <Nav />
              <Courses />
              <Footer />
            </Route>
            <Route path="/events" exact>
              <Nav />
              <Events />
              <Footer />
            </Route>
            <Route path="/login" exact>
              <NavLogin />
              <Login />
              <Footer />
            </Route>
            <Route path="/signup" exact>
              <NavSignup />
              <Signup />
              <Footer />
            </Route>

          </Switch>
        </div>
      }
    </Router>
  );
}

export default App;
