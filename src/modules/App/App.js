import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import AppShell from './AppShell';
import Loader from '../../common/components/Loader/Loader';
import '../../styles/App/App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <AppShell>
          <Switch>
            <Route exact path="/" component={Loader} />
          </Switch>
        </AppShell>
      </Router>
    );
  }
}

export default App;
