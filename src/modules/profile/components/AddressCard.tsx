import React from 'react';
import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/AddressCardStyles';
import {useTranslation} from 'react-i18next';
import {useDarkModeContext} from 'react-native-dark-mode';

const AddressCard = ({
  title,
  detail,
  editAction
}: {
  title: string;
  detail: string;
  editAction: (event: GestureResponderEvent) => void;
}) => {
  const {t} = useTranslation();
  const mode = useDarkModeContext();
  return (
    <View style={styles[mode].container}>
      <View style={styles[mode].upperContainer}>
        <Text style={styles[mode].title}>{t(title)}</Text>
        <View style={styles[mode].actionContainer}>
          <TouchableOpacity onPress={editAction}>
            <MaterialIcon name="pencil-outline" size={24} color={'orange'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcon
              name="trash-can-outline"
              size={24}
              color={'#ff6200'}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text>{detail.length > 100 ? detail.slice(0, 100) + '...' : detail}</Text>
    </View>
  );
};

export default AddressCard;
