import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CartScene from './scenes/CartScene';
import {useTranslation} from 'react-i18next';
import {useDarkModeContext} from 'react-native-dark-mode';
import styles from '../../common/styles/navigatorStyles';

const CartStack = createStackNavigator();

const CartStackScreen = () => {
  const {t} = useTranslation();
  const mode = useDarkModeContext();
  return (
    <CartStack.Navigator>
      <CartStack.Screen
        name={t('Shopping Cart')}
        component={CartScene}
        options={{
          headerTintColor: styles[mode].header.tintColor,
          headerStyle: {backgroundColor: styles[mode].header.backgroundColor}
        }}
      />
    </CartStack.Navigator>
  );
};

export default CartStackScreen;
