import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import NavBar from "./components/NavBar";
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar />
     <Switch>
       <Route component={Home} path='/' exact />
       <Route component={About} path='/about' />
       <Route component={Projects} path='/projects' />
       <Route component={Resume} path='/resume' />
       <Route component={Contact} path='/contact' />
     </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
