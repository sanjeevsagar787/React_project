import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { main } from '@popperjs/core';
import base from './component/base';
import error from './component/error'

function App() {
  return <Router>
    <Switch>
      <Route path="/" exact component={base} >
      </Route>
      <Route component = {error} >
      </Route>
    </Switch>

  </Router>
}

export default App;
