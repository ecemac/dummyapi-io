import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Header} from '../components/Header';
import {HomePage} from '../pages/HomePage';
import '../master.scss';


export const MainRouter: React.FC = () => {
  return(
    <Router>
      <div id="wrapper">
        <Header />
        <Switch>
        <Route exact path="/" component={HomePage}/>
      </Switch>
      </div>
    </Router>
  )
}