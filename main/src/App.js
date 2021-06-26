import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
//Components
import CV from './components/CV'
import Contact from './components/Contact'
import About from './components/About'
import Home from './components/Home'
import Footer from './components/Footer';

function App() {
  return (
   <>
   <BrowserRouter>
   <div className="App">
     <Switch>
       <Route exact path='/contact' component={Contact} />
       <Route exact path='/cv' component={CV} />
       <Route exact path='/about' component={About} />
       <Route exact path='/' component={Home} />
     </Switch>
   </div>
   </BrowserRouter>
   <Footer />
  </>
  );
}

export default App;
