import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileMenuItem = ({
  title,
  icon,
  onPress
}: {
  title: string;
  icon: string;
  onPress: Function;
}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={{
        justifyContent: 'center',
        height: 60,
        marginVertical: '5%',
        borderRadius: 8,
        backgroundColor: 'white'
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: '3%'
        }}>
        <MaterialIcon name={icon} size={26} />
        <Text style={{fontSize: 15}}>{title}</Text>
        <MaterialIcon name="chevron-right" size={26} />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileMenuItem;
