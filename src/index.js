import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import './index.css';
import App from './containers/App/App';
import store, { history } from './store';
import registerServiceWorker from './registerServiceWorker';

const index = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App/>
      </div>
    </ConnectedRouter>
  </Provider>
);

const target = document.getElementById('root');

ReactDOM.render(index, target);

registerServiceWorker();
