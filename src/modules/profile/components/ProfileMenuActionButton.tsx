import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const ProfileMenuActionButton = ({title}: {title: string}) => {
  return (
    <TouchableOpacity
      onPress={() => {}}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        marginVertical: '5%',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'orange',
        backgroundColor: 'white'
      }}>
      <Text style={{fontSize: 18, color: 'orange'}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ProfileMenuActionButton;
