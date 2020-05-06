import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import ProfileScene from './scenes/ProfileScene';
import AccountScene from './scenes/AccountScene';
import HistoryScene from './scenes/HistoryScene';
import AddressScene from './scenes/AddressScene';
import PaymentScene from './scenes/PaymentScene';
import AddressEditScene from './scenes/AddressEditScene';
import {useTranslation} from 'react-i18next';
import styles from '../../common/styles/navigatorStyles';
import {useDarkModeContext} from 'react-native-dark-mode';

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  const {t} = useTranslation();
  const mode = useDarkModeContext();
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name={t('Profile')}
        component={ProfileScene}
        options={{
          headerTintColor: styles[mode].header.tintColor,
          headerStyle: {backgroundColor: styles[mode].header.backgroundColor}
        }}
      />
      <ProfileStack.Screen
        name="Account"
        component={AccountScene}
        options={{
          headerTintColor: styles[mode].header.tintColor,
          headerStyle: {backgroundColor: styles[mode].header.backgroundColor},
          headerTitle: t('Account')
        }}
      />
      <ProfileStack.Screen
        name="Address"
        component={AddressScene}
        options={{
          headerTintColor: styles[mode].header.tintColor,
          headerStyle: {backgroundColor: styles[mode].header.backgroundColor},
          headerTitle: t('Address')
        }}
      />
      <ProfileStack.Screen
        name="Edit Address"
        component={AddressEditScene}
        options={{
          headerTintColor: styles[mode].header.tintColor,
          headerStyle: {backgroundColor: styles[mode].header.backgroundColor},
          headerTitle: t('Edit Address')
        }}
      />
      <ProfileStack.Screen
        name="Payment"
        component={PaymentScene}
        options={{
          headerTintColor: styles[mode].header.tintColor,
          headerStyle: {backgroundColor: styles[mode].header.backgroundColor},
          headerTitle: t('Payment')
        }}
      />
      <ProfileStack.Screen
        name="History"
        component={HistoryScene}
        options={{
          headerTintColor: styles[mode].header.tintColor,
          headerStyle: {backgroundColor: styles[mode].header.backgroundColor},
          headerTitle: t('History')
        }}
      />
    </ProfileStack.Navigator>
  );
}
export default ProfileStackScreen;
