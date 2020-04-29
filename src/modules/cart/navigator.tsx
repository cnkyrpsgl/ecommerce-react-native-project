import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CartScene from './scenes/CartScene';

const CartStack = createStackNavigator();

const CartStackScreen = () => {
  return (
    <CartStack.Navigator>
      <CartStack.Screen
        name="Shopping Cart"
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
