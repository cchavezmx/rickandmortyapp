import React, { Component } from 'react'
import { Fragment } from 'react-is';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import Layout from 'containers/Layout';


class App extends Component {

  render() {
    return (
      <Fragment>
        <Router>
              <Switch>
                  <Route path="/" name="Home" component={Layout} />
              </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;

