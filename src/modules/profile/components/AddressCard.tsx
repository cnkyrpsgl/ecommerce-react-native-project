import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/AddressCardStyles';

const AddressCard = ({title, detail}: {title: string; detail: string}) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.actionContainer}>
          <TouchableOpacity>
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
