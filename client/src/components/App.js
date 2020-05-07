import React from 'react';
import Topnav from './tinycomponents/topnav';
import Footer from './tinycomponents/footer';


import About from './views/about';
import Login from './views/login';
import Register from './views/register';
import MainHome from './views/home'

//importing react-router for navigation
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';

//importing styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  return (
   
    <div className="App">
       <Router>
      <Topnav />
      <Switch> 
        <Route  path={"/"} exact component={MainHome} />
        <Route  path={"/about"} exact component={About} />
        <Route  path={"/Login"} exact component={Login} />
        <Route  path={"/Register"} exact   component={Register} />
      </Switch>
      <Footer />
    
    </Router>
    </div>
  );
}

export default App;
