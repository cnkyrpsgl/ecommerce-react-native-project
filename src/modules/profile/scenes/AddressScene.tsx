import React from 'react';
import {Text, View} from 'react-native';
import AddressCard from '../components/AddressCard';
import ActionButton from '../../../common/components/ActionButton';
import styles from '../styles/AddressSceneStyles';
import {useSelector} from 'react-redux';
import {addressSelectors} from '../../../core/address/stores';

const AddressScene = ({navigation}: {navigation: any}) => {
  const {addressMap} = useSelector(addressSelectors);

  const editAction = () => navigation.navigate('Edit Address');
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>My Addresses</Text>
      </View>
      {Object.values(addressMap).map((address) => (
        <AddressCard {...address} key={address.title} editAction={editAction} />
      ))}
      <ActionButton title={'Add New Address'} action={() => {}} />
    </View>
  );
};

export default AddressScene;
