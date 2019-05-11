import React, { Component } from 'react';
import {
  Route,
  Link,
  Switch
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Borrow from './Borrow';
import Usage from './Usage';
import Reservation from './Reservation';
import Construction from './Construction';
import logo from './assets/logo.png';
import title from './assets/tunnel-x.png';
import logoName from './assets/tunnelx.png';
import './App.css';


class App extends Component {
  state = {
    cover:false
  };
  
  Boxlayout = function() {

    var wrapper = document.body,
        sections = Array.from(document.querySelectorAll('.section')),
        closeButtons = Array.from(document.querySelectorAll('.close-section')),
        expandedClass = 'is-expanded',
        hasExpandedClass = 'has-expanded-item';
  
    return { init : init };
  
    function init() {
      _initEvents();
    }
  
    function _initEvents() {    
      sections.forEach(function(element) {
        element.onclick = function() {
          _openSection(this);
        };
      });
      closeButtons.forEach(function(element) {
        element.onclick = function(element) {
          element.stopPropagation();
          _closeSection(this.parentElement);
        };
      });
    }
  
    function _openSection(element) {
      if ( ! element.classList.contains(expandedClass) ) {
        element.classList.add(expandedClass);
        wrapper.classList.add(hasExpandedClass);
      }
    }
  
    function _closeSection(element) {
      if ( element.classList.contains(expandedClass) ) {
        element.classList.remove(expandedClass);
        wrapper.classList.remove(hasExpandedClass);
      }
    }
  
  }();
  

  render() {
    const { cover } = this.state.cover;
    console.log( this.state.cover );

    this.Boxlayout.init();
    return (
      
    <div className="App" id="background">
      <div className="Left-side">
        <div className="Menu Left">
          <img src={title} className="App-title" alt="logo" />
        </div>
        <div className="left-body">
          <div>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div>
            <img src={logoName} className="App-name" alt="logo" />
          </div>
        </div>  
      </div>
      
      <header className="App-header">
          <div className="Menu">
            <Link exact to="/" className="Menu-button" activeClassName="Menu-button" > Home </Link>
            <Link to="/about" className="Menu-button" > About Us </Link>
            <Link to="/contact" className="Menu-button" > Contact </Link>
          </div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/borrow" component={Borrow} />
            <Route path="/usage" component={Usage} />
            <Route path="/reservation" component={Reservation} />
            <Route path="/construction" component={Construction} />
        </Switch>
      </header>

     

        <div className="cd-cover-layer"></div>
      </div>
    );
  }
}

export default App;
