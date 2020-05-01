import React from 'react';
import {Text, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const EmptyCardNote = () => {
  return (
    <View
      style={{
        flex: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: '3%'
      }}>
      <View
        style={{
          marginVertical: '10%',
          backgroundColor: 'white',
          borderRadius: 10,
          paddingVertical: '5%',
          paddingHorizontal: '7%'
        }}>
        <MaterialIcon name="cart-arrow-down" color={'orange'} size={80} />
      </View>
      <Text style={{fontSize: 16, textAlign: 'center', color: '#f08a5d'}}>
        You can fill your cart by adding products ranging from fruits,
        vegetables, meat, and much more!
      </Text>
    </View>
  );
};

export default EmptyCardNote;
