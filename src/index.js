import React from 'react';
import ReactDOM from 'react-dom';
import { CryptoApp } from './CryptoApp';

import { Provider } from 'react-redux';
import { persist_store, store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

import './styles/styles.scss';
import 'animate.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

ReactDOM.render(
  <Provider store={ store }>
    <PersistGate loading={ null } persistor={ persist_store }>
      <CryptoApp />,
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

