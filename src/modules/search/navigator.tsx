import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScene from './scenes/SearchScene';

const SearchStack = createStackNavigator();

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="Search"
        component={SearchScene}
        options={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'orange'}
        }}
      />
    </SearchStack.Navigator>
  );
};

export default SearchStackScreen;
