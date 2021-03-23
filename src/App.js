import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';

import './App.css';

import Nav from "./components/Nav";
import Home from './pages/front/Home'
import Courses from './pages/front/Courses';
import Events from './pages/front/Events';
import Login from './pages/front/Login';
import Signup from './pages/front/Signup';
import NavLogin from './components/NavLogin';
import NavSignup from './components/NavSignup';
import NavBackend from './components/NavBackend';
import Footer from './components/Footer';

function App() {
  
  const [loggon, setLoggon] = useState(true);

  return (
    <Router>

      {
        (loggon) ?
        <div className="App">
          <NavBackend />
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
