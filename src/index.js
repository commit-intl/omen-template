import {omen, Store} from '@omen/core';
import initialState from './initialState';
import App from './App';
import './index.scss';

const store = new Store(initialState);

omen.render(
  <App title="Omen is awesome!"/>,
  document.body,
  store,
);