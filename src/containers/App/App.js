import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../Home';

export default () => (
  <div>
    <header>
      <Link to="/">Home</Link>
    </header>
    <main>
      <Route exact path="/" component={Home}></Route>
    </main>
  </div>
);
