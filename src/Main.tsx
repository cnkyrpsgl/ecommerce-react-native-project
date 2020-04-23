import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';

import App from './App';
import stores from './core/redux';
import {PersistGate} from 'redux-persist/integration/react';

const {store, persistor} = stores;

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#f1c40f',
    accent: '#3498db'
  }
};

const Main = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <App />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default Main;
