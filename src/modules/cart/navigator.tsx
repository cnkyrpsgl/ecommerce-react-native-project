import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CartScene from './scenes/CartScene';
import {useTranslation} from 'react-i18next';

const CartStack = createStackNavigator();

const CartStackScreen = () => {
  const {t} = useTranslation();
  return (
    <CartStack.Navigator>
      <CartStack.Screen
        name={t('Shopping Cart')}
        component={CartScene}
        options={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'orange'}
        }}
      />
    </CartStack.Navigator>
  );
};

export default CartStackScreen;
