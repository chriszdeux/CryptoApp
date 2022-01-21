import React from 'react';
import ReactDOM from 'react-dom';
import { CryptoApp } from './CryptoApp';

import './styles/styles.scss';
import 'animate.css';
import { Provider } from 'react-redux';
import { persist_store, store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store={ store }>
    <PersistGate loading={ null } persistor={ persist_store }>
      <CryptoApp />,
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

