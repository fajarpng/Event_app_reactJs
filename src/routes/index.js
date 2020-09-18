import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import pages
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Dashboard2 from '../pages/DashboardTable';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/table" exact component={Dashboard2} />
        </Switch>
      </Router>
    );
  }
}
