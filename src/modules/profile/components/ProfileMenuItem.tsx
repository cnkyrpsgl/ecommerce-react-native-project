import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/ProfileMenuItemStyles';

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
    <TouchableOpacity onPress={() => onPress()} style={styles.container}>
      <View style={styles.contentContainer}>
        <MaterialIcon name={icon} size={26} color={'orange'} />
        <Text style={styles.title}>{title}</Text>
        <MaterialIcon name="chevron-right" size={26} color={'orange'} />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileMenuItem;
