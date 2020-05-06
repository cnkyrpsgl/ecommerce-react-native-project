import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScene from './scenes/HomeScene';
import {useTranslation} from 'react-i18next';
import {useDarkModeContext} from 'react-native-dark-mode';
import styles from '../../common/styles/navigatorStyles';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  const {t} = useTranslation();
  const mode = useDarkModeContext();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={t('Home')}
        component={HomeScene}
        options={{
          headerTintColor: styles[mode].header.tintColor,
          headerStyle: {backgroundColor: styles[mode].header.backgroundColor}
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
