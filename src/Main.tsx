import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {DarkModeProvider} from 'react-native-dark-mode';
import {PersistGate} from 'redux-persist/integration/react';

import App from './App';
import stores from './core/redux';

const {store, persistor} = stores;

const Main = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <DarkModeProvider>
          <PaperProvider>
            <App />
          </PaperProvider>
        </DarkModeProvider>
      </PersistGate>
    </Provider>
  );
};

export default Main;
