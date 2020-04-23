import React from 'react';
import {Text, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const AddressCard = ({title, detail}: {title: string; detail: string}) => {
  return (
    <View
      style={{
        padding: '5%',
        borderRadius: 8,
        backgroundColor: 'white',
        marginVertical: '3%',
        height: 125
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: '4%'
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>{title}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            flex: 0.3
          }}>
          <MaterialIcon name="pencil-outline" size={24} color={'orange'} />
          <MaterialIcon name="trash-can-outline" size={24} color={'#ff6200'} />
        </View>
      </View>
      <Text>{detail.length > 100 ? detail.slice(0, 100) + '...' : detail}</Text>
    </View>
  );
};

export default AddressCard;
