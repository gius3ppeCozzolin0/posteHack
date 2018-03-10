/* global window */
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import storage from 'redux-persist/es/storage'; // default: localStorage if web, AsyncStorage if react-native
import thunk from 'redux-thunk';
import reducers from '../reducers';

// Redux Persist config
const config = {
  key: 'root',
  storage,
  blacklist: ['status'],
};


const middleware = [thunk];

const configureStore = () => {
  const store = createStore(
    combineReducers(reducers),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(applyMiddleware(...middleware)),
  );



  return { store };
};

export default configureStore;
