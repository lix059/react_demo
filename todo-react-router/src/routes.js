import React, {Component} from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { HashRouter } from 'react-router-dom'

import App from './App';

export default class Routes extends Component{
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" component={App}/>
          <Route path="/active" component={App}/>
          <Route path="/complete" component={App}/>
        </Switch>
      </HashRouter>
    );
  }
}