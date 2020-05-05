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
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Text style={styles.title}>{t(title)}</Text>
        <View style={styles.actionContainer}>
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
