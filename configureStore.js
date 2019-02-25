import { createStore, applyMiddleware } from 'redux';
import rootReducers from './redux/reducers/index';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export default function configureStore() {
    let store = createStore(rootReducers, applyMiddleware(thunk, logger));
}
