import React from 'react';
import {ImageSourcePropType, View, Text, Image} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const CartItem = ({
  productName,
  unitPrice,
  amount,
  urlSource
}: {
  productName: string;
  unitPrice: number;
  amount: number;
  urlSource: ImageSourcePropType;
}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 10,
        marginTop: '3%'
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{padding: '10%'}}>
          <Image source={urlSource} style={{width: 50, height: 50}} />
        </View>
        <View style={{height: 50, justifyContent: 'space-between'}}>
          <Text>{productName}</Text>
          <Text style={{fontWeight: 'bold'}}>{`${unitPrice} $`}</Text>
        </View>
      </View>
      <View
        style={{
          borderRadius: 10,
          borderWidth: 1,
          borderColor: 'orange',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginRight: '3%'
        }}>
        <MaterialIcon
          name="minus"
          size={20}
          style={{margin: '2%'}}
          color={'red'}
        />
        <Text style={{fontWeight: 'bold'}}>{amount}</Text>
        <MaterialIcon
          name="plus"
          size={20}
          style={{margin: '2%'}}
          color={'green'}
        />
      </View>
    </View>
  );
};

export default CartItem;
