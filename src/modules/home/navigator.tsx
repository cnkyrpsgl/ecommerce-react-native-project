import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScene from './scenes/HomeScene';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
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
