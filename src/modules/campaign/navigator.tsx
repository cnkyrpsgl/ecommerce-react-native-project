import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CampaignScene from './scenes/CampaignScene';
import {useTranslation} from 'react-i18next';
import styles from '../../common/styles/navigatorStyles';
import {useDarkModeContext} from 'react-native-dark-mode';

const CampaignStack = createStackNavigator();

const CampaingStackScreen = () => {
  const {t} = useTranslation();
  const mode = useDarkModeContext();
  return (
    <CampaignStack.Navigator>
      <CampaignStack.Screen
        name={t('Campaign', {count: 2})}
        component={CampaignScene}
        options={{
          headerTintColor: styles[mode].header.tintColor,
          headerStyle: {backgroundColor: styles[mode].header.backgroundColor}
        }}
      />
    </CampaignStack.Navigator>
  );
};

export default CampaingStackScreen;
