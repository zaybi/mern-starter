import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

// redux stuff importing starts
import {Provider} from "react-redux";
import { createStore , applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Reducer from './reducers'

const createStoreWithMiddleware = applyMiddleware( promiseMiddleware , ReduxThunk)(createStore);



// redux stuff ends


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(Reducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    
    <App />

    </Provider>,

  document.getElementById('root')
);

