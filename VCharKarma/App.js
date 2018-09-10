import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducers from './redux/reducers/index';
import { AppNavigator, middleware } from './src/navigators/AppNavigator';

// import axios from 'axios';
// import axiosMiddleware from 'redux-axios-middleware';

// import LoginPage from './src/components/LoginPage';
// import UserProfilePage from './src/components/UserProfilePage';


// const client = axios.create({
//   baseURL: 'http://localhost:3000/api',
//   responseType: 'json'
// });

class App extends Component {
 // store = createStore(rootReducers, applyMiddleware(thunk, middleware, axiosMiddleware(client), logger));
  store = createStore(rootReducers, applyMiddleware(thunk, middleware, logger));
  render() {
    return (  
      <Provider store = { this.store } >
        <AppNavigator />
      </Provider>  
    );
  }
}

export default App;

