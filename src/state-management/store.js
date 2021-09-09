import {createStore} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import combineReducers from './reducer/rootReducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist:['todoState']
  }

const persistedReducer = persistReducer(persistConfig , combineReducers)

let store = createStore(persistedReducer)
let persistor = persistStore(store)

export {store, persistor}
