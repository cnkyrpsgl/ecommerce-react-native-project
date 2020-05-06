import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/ProfileMenuItemStyles';
import {useTranslation} from 'react-i18next';
import {useDarkModeContext} from 'react-native-dark-mode';

const ProfileMenuItem = ({
  title,
  icon,
  onPress
}: {
  title: string;
  icon: string;
  onPress: Function;
}) => {
  const {t} = useTranslation();
  const mode = useDarkModeContext();
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles[mode].container}>
      <View style={styles[mode].contentContainer}>
        <MaterialIcon name={icon} size={26} color={'orange'} />
        <Text style={styles[mode].title}>{t(title)}</Text>
        <MaterialIcon name="chevron-right" size={26} color={'orange'} />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileMenuItem;
