import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const PaymentScene = () => {
  return (
    <View style={{margin: '3%', borderWidth: 2}}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          padding: '3%',
          justifyContent: 'space-around'
        }}>
        <TouchableOpacity>
          <Text style={{color: 'orange'}}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentScene;
