import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CampaignScene from './scenes/CampaignScene';

const CampaignStack = createStackNavigator();

const CampaingStackScreen = () => {
  return (
    <CampaignStack.Navigator>
      <CampaignStack.Screen
        name="Campaign"
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
