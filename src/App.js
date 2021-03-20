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
import Dashboard from './pages/back/Dashboard';

// import About from "./pages/About";
// import Shop from "./pages/Shop";

function App() {
  
  const [loggon, setLoggon] = useState(false);

  return (
    <Router>

      {
        (loggon) ?
        <div className="App">
          <NavDashboard />
          <Switch>
            <Route path='/dashboard' exact component={Dashboard} />
            <Route path='/exams' axact component={Home} />
            <Route path='/exercises' axact component={Home} />
          </Switch>
        </div>
        :
        <div className="App" >
          <Switch>
            <Route path="/" exact>
              <Nav />
              <Home />
            </Route>
            <Route path="/courses" exact>
              <Nav />
              <Courses />
            </Route>
            <Route path="/events" exact>
              <Nav />
              <Events />
            </Route>
            <Route path="/login" exact>
              <NavLogin />
              <Login />
            </Route>
            <Route path="/signup" exact>
              <NavSignup />
              <Signup />
            </Route>

          </Switch>
        </div>
      }
    </Router>
  );
}

export default App;
