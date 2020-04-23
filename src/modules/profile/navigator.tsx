import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import ProfileScene from './scenes/ProfileScene';
import AccountScene from './scenes/AccountScene';
import HistoryScene from './scenes/HistoryScene';
import AddressScene from './scenes/AddressScene';
import PaymentScene from './scenes/PaymentScene';

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScene}
        options={{headerTintColor: 'orange'}}
      />
      <ProfileStack.Screen
        name="Account"
        component={AccountScene}
        options={{headerTintColor: 'orange'}}
      />
      <ProfileStack.Screen
        name="Address"
        component={AddressScene}
        options={{headerTintColor: 'orange'}}
      />
      <ProfileStack.Screen
        name="Payment"
        component={PaymentScene}
        options={{headerTintColor: 'orange'}}
      />
      <ProfileStack.Screen
        name="History"
        component={HistoryScene}
        options={{headerTintColor: 'orange'}}
      />
    </ProfileStack.Navigator>
  );
}
export default ProfileStackScreen;
