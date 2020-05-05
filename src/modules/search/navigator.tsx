import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScene from './scenes/SearchScene';
import {useTranslation} from 'react-i18next';

const SearchStack = createStackNavigator();

const SearchStackScreen = () => {
  const {t} = useTranslation();
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name={t('Search')}
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
