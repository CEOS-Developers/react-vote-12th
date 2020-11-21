import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer,{rootSaga} from './modules';
import createSagaMiddleware from 'redux-saga';

//const sagaMiddleware=createSagaMiddleware();
//const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)));


//sagaMiddleware.run(rootSaga);
ReactDOM.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
