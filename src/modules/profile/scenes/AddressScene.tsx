import React from 'react';
import {Text, View} from 'react-native';
import {addressData} from '../constants';
import AddressCard from '../components/AddressCard';
import ActionButton from '../../../common/components/ActionButton';
import styles from '../styles/AddressSceneStyles';

const AddressScene = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>My Addresses</Text>
      </View>
      {addressData.map((address) => (
        <AddressCard {...address} key={address.title} />
      ))}
      <ActionButton title={'Add New Address'} action={() => {}} />
    </View>
  );
};

export default AddressScene;
