import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';

import {
  increment,
  decrement,
  incrementAsync,
  decrementAsync,
} from '../store/modules/counter';

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Welcome page</p>
    <p>Count: {props.count}</p>

    <p>
      <button onClick={props.increment} disabled={props.isIncrementing}>Increment</button>
      <button onClick={props.incrementAsync} disabled={props.isIncrementing}>Increment Async</button>
    </p>

    <p>
      <button onClick={props.decrement} disabled={props.isDecrementing}>Decrementing</button>
      <button onClick={props.decrementAsync} disabled={props.isDecrementing}>Decrement Async</button>
    </p>
  </div>
);

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing,
});

const mapDispathToProps = dispatch => bindActionCreators({
  increment,
  decrement,
  incrementAsync,
  decrementAsync,
  changePage: () => push('/about-us')
}, dispatch);

export default connect(mapStateToProps, mapDispathToProps)(Home);
