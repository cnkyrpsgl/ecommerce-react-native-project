import 'react-native-gesture-handler';
import * as React from 'react';
import {Button, StatusBar, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileStackScreen from './modules/profile/navigator';
import CampaingStackScreen from './modules/campaign/navigator';
import CartStackScreen from './modules/cart/navigator';

function DetailsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Details!</Text>
    </View>
  );
}

function HomeScreen({navigation}: {navigation: any}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0)" />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={'Home'}
          backBehavior={'none'}
          activeColor={'white'}
          inactiveColor={'white'}
          barStyle={{backgroundColor: 'orange'}}>
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color}) => (
                <MaterialIcon name="home-outline" color={color} size={26} />
              )
            }}
          />
          <Tab.Screen
            name="Products"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Products',
              tabBarIcon: ({color}) => (
                <MaterialIcon name="view-list" color={color} size={26} />
              )
            }}
          />
          <Tab.Screen
            name="Cart"
            component={CartStackScreen}
            options={{
              tabBarLabel: 'Cart',
              tabBarIcon: ({color}) => (
                <MaterialIcon name="cart-outline" color={color} size={26} />
              )
            }}
          />
          <Tab.Screen
            name="Campaign"
            component={CampaingStackScreen}
            options={{
              tabBarLabel: 'Campaign',
              tabBarIcon: ({color}) => (
                <MaterialIcon name="bullhorn-outline" color={color} size={26} />
              )
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{
              tabBarLabel: 'Profile',
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
