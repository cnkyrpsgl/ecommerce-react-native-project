import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import reactotronSupplier from './reactotronConfig';
import SagaManager from './rootSagas';

const reactotron = reactotronSupplier();
// @ts-ignore
const sagaMonitor = reactotron ? reactotron.createSagaMonitor() : undefined;
// @ts-ignore
const enhancers = reactotron ? [reactotron.createEnhancer()] : undefined;
const sagaMiddleware = createSagaMiddleware({sagaMonitor});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['appConfigState']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware],
  enhancers
});

SagaManager.startSagas(sagaMiddleware);

if ((module as any).hot) {
  (module as any).hot.accept(() => {
    const newRootReducer = require('./rootReducer').default;
    store.replaceReducer(persistReducer(persistConfig, newRootReducer));
    SagaManager.cancelSagas(store);
    require('./rootSagas').default.startSagas(sagaMiddleware);
  });
}

export {default as useActions} from './hooks/useActions';
export * from './reduxTypes';

export default {store, persistor: persistStore(store)};
