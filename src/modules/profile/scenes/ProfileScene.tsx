import React from 'react';
import {FlatList, View} from 'react-native';
import profileSceneStyles from '../styles/ProfileSceneStyles';
import {profileMenuData} from '../constants';
import ProfileMenuItem from '../components/ProfileMenuItem';
import ProfileMenuActionButton from '../components/ProfileMenuActionButton';

const ProfileScene = ({navigation}: {navigation: any}) => {
  return (
    <View style={profileSceneStyles.container}>
      <FlatList
        data={profileMenuData}
        keyExtractor={(item) => item.title}
        renderItem={({item}) => (
          <ProfileMenuItem
            {...item}
            onPress={() => navigation.navigate(item.scene)}
          />
        )}
        contentContainerStyle={{
          justifyContent: 'center',
          flex: 1
        }}
      />
      <ProfileMenuActionButton title={'Log Out'} />
    </View>
  );
};

export default ProfileScene;
