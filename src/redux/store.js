import { createStore, applyMiddleware } from 'redux'; // Redux
import { persistStore, persistReducer } from 'redux-persist'; // Redux Persist
import storage from 'redux-persist/lib/storage'; // Redux Persist Storage
import promiseMiddleware from 'redux-promise-middleware'; // Promise Middleware
import rootReducer from './reducers'; // Import Reducer

// Middleware: Redux Persist Config
const persistConfig = {
  // Root
  key: 'primary',
  // Storage Method
  storage: storage,
  // Whitelist (Save Specific Reducers)
  whitelist: ['data'],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
const store = createStore(
  persistedReducer,
  applyMiddleware(
    promiseMiddleware
  )
);

// Middleware: Redux Persist Persister
const persistor = persistStore(store);

// Exports
export { store, persistor };
