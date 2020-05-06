import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScene from './scenes/SearchScene';
import {useTranslation} from 'react-i18next';
import {useDarkModeContext} from 'react-native-dark-mode';
import styles from '../../common/styles/navigatorStyles';

const SearchStack = createStackNavigator();

const SearchStackScreen = () => {
  const {t} = useTranslation();
  const mode = useDarkModeContext();
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name={t('Search')}
        component={SearchScene}
        options={{
          headerTintColor: styles[mode].header.tintColor,
          headerStyle: {backgroundColor: styles[mode].header.backgroundColor}
        }}
      />
    </SearchStack.Navigator>
  );
};

export default SearchStackScreen;
