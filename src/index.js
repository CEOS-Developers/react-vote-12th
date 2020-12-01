import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CookiesProvider } from 'react-cookie';

import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer,{rootSaga} from './modules';
import createSagaMiddleware from 'redux-saga';

//const sagaMiddleware=createSagaMiddleware();
//const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)));


//sagaMiddleware.run(rootSaga);
ReactDOM.render(
<CookiesProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </CookiesProvider>,
  document.getElementById('root')
);
