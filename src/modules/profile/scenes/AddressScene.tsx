import React from 'react';
import {Text, View} from 'react-native';
import {addressData} from '../constants';
import AddressCard from '../components/AddressCard';
import ActionButton from '../../../common/components/ActionButton';

const AddressScene = () => {
  return (
    <View style={{marginHorizontal: '10%'}}>
      <View
        style={{
          paddingVertical: '5%'
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>My Addresses</Text>
      </View>
      {addressData.map((address) => (
        <AddressCard {...address} key={address.title} />
      ))}
      <ActionButton title={'Add New Address'} action={() => {}} />
    </View>
  );
};

export default AddressScene;
