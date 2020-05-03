import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import ProfileScene from './scenes/ProfileScene';
import AccountScene from './scenes/AccountScene';
import HistoryScene from './scenes/HistoryScene';
import AddressScene from './scenes/AddressScene';
import PaymentScene from './scenes/PaymentScene';
import AddressEditScene from './scenes/AddressEditScene';

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScene}
        options={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'orange'}
        }}
      />
      <ProfileStack.Screen
        name="Account"
        component={AccountScene}
        options={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'orange'}
        }}
      />
      <ProfileStack.Screen
        name="Address"
        component={AddressScene}
        options={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'orange'}
        }}
      />
      <ProfileStack.Screen
        name="Edit Address"
        component={AddressEditScene}
        options={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'orange'}
        }}
      />
      <ProfileStack.Screen
        name="Payment"
        component={PaymentScene}
        options={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'orange'}
        }}
      />
      <ProfileStack.Screen
        name="History"
        component={HistoryScene}
        options={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'orange'}
        }}
      />
    </ProfileStack.Navigator>
  );
}
export default ProfileStackScreen;
