import React from 'react';
import { connect } from 'react-redux';
import { Switch, Redirect, Route } from 'react-router-dom';
import Dashboard from './containers/Dashboard/Dashboard';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact component={Dashboard} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default connect(null)(App);
