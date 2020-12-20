import './App.css';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

// components

import Home from './components/Home.js';
import About from './components/About.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';

function App() {
  return (
    <Router>
    <div className="App">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
        </ul>

      <Route exact path="/" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/signup" component={Signup}></Route>

    </div>
    </Router>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"))
