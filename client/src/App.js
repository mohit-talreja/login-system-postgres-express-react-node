import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import Dashboard from './components/Dashboard'
import LogOut from './components/LogOut'
import 'bootstrap/dist/css/bootstrap.css'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/signup" component={ SignUp } />
        <Route path="/login" component={ LogIn } />
        <Route path="/dashboard" component={ Dashboard } />
        <Route path="/logout" component={ LogOut } />
      </Switch>
    </Router>
  )
}

export default App