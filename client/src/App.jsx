import React, {useState, useEffect} from 'react';
import { Container}  from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/NavBar/NavBar';
import Auth from './auth/auth';
import Home from './components/home/home';

export default function PrimarySearchAppBar() {
  return (
      <BrowserRouter>
      <Navbar />
        <Container>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/auth" exact component={Auth} />
            </Switch>
        </Container>
      </BrowserRouter>
  );
}
