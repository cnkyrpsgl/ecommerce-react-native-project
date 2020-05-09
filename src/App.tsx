import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import * as React from 'react';
import {StatusBar} from 'react-native';
import {useTranslation} from 'react-i18next';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileStackScreen from './modules/profile/navigator';
import CampaingStackScreen from './modules/campaign/navigator';
import CartStackScreen from './modules/cart/navigator';
import SearchStackScreen from './modules/search/navigator';
import HomeStackScreen from './modules/home/navigator';
import styles from './AppStyles';
import {useDarkModeContext} from 'react-native-dark-mode';
import {useEffect} from 'react';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const {t} = useTranslation();
  const mode = useDarkModeContext();
  return (
    <>
      <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.3)" />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={'Home'}
          backBehavior={'none'}
          activeColor={styles[mode].navigator.activeColor}
          inactiveColor={styles[mode].navigator.inactiveColor}
          barStyle={{backgroundColor: styles[mode].navigator.backgroundColor}}>
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarLabel: t('Home'),
              tabBarIcon: ({color}) => (
                <MaterialIcon name="home-outline" color={color} size={26} />
              )
            }}
          />
          <Tab.Screen
            name="Search"
            component={SearchStackScreen}
            options={{
              tabBarLabel: t('Search'),
              tabBarIcon: ({color}) => (
                <MaterialIcon name="magnify" color={color} size={26} />
              )
            }}
          />
          <Tab.Screen
            name="Cart"
            component={CartStackScreen}
            options={{
              tabBarLabel: t('Cart'),
              tabBarIcon: ({color}) => (
                <MaterialIcon name="cart-outline" color={color} size={26} />
              )
            }}
          />
          <Tab.Screen
            name="Campaign"
            component={CampaingStackScreen}
            options={{
              tabBarLabel: t('Campaign', {count: 2}),
              tabBarIcon: ({color}) => (
                <MaterialIcon name="bullhorn-outline" color={color} size={26} />
              )
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{
              tabBarLabel: t('Profile'),
              tabBarIcon: ({color}) => (
                <MaterialIcon name="account-outline" color={color} size={26} />
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
