import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import './App.css';
import AboutPage from './route/AboutPage.js'
import NotFoundPage from './route/NotFoundPage.js'
import UserPage from './route/UserPage.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">UserPage</Link>
              </li>
            </ul>
            <hr/>
            <Switch>
              <Route exact path="/" component={() => <h1>Hello World!</h1>}/>
              <Route path="/about" component={AboutPage}/>
              <Route path="/users/:userid" component={({match}) => {
                 return <h1> hello user {match.params.userid}</h1>
              }}/>
              <Route exact path="/users" component={UserPage}/>
              <Route component={NotFoundPage}/>
            </Switch>
            </nav>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
