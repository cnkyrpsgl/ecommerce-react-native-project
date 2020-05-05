import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScene from './scenes/HomeScene';
import {useTranslation} from 'react-i18next';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  const {t} = useTranslation();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={t('Home')}
        component={HomeScene}
        options={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'orange'}
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
