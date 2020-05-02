import React from 'react';
import {FlatList, View} from 'react-native';
import styles from '../styles/ProfileSceneStyles';
import {profileMenuData} from '../constants';
import ProfileMenuItem from '../components/ProfileMenuItem';
import ActionButton from '../../../common/components/ActionButton';

const ProfileScene = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={profileMenuData}
        keyExtractor={(item) => item.title}
        renderItem={({item}) => (
          <ProfileMenuItem
            {...item}
            onPress={() => navigation.navigate(item.scene)}
          />
        )}
        contentContainerStyle={styles.contentContainer}
      />
      <ActionButton title={'Log Out'} action={() => {}} />
    </View>
  );
};

export default ProfileScene;
