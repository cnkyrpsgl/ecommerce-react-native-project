import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CampaignScene from './scenes/CampaignScene';
import {useTranslation} from 'react-i18next';

const CampaignStack = createStackNavigator();

const CampaingStackScreen = () => {
  const {t} = useTranslation();
  return (
    <CampaignStack.Navigator>
      <CampaignStack.Screen
        name={t('Campaign', {count: 2})}
        component={CampaignScene}
        options={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'orange'}
        }}
      />
    </CampaignStack.Navigator>
  );
};

export default CampaingStackScreen;
