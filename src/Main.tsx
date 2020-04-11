import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';

import App from './App';
import stores from './core/redux';
import {PersistGate} from 'redux-persist/integration/react';

const {store, persistor} = stores;

const Main = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <App />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default Main;
