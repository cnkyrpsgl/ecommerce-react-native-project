import React from 'react';
import {Text, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AddressType} from '../constants';

const HistoryCard = ({
  date,
  skuAmount,
  cartPrice,
  addressType
}: {
  date: string;
  skuAmount: number;
  cartPrice: number;
  addressType: AddressType;
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingVertical: '4%',
        marginBottom: '1%',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <MaterialIcon
          name={
            addressType === AddressType.work ? 'office-building' : 'home-city'
          }
          size={30}
          color={'#f08a5d'}
          style={{padding: '3%'}}
        />
        <View>
          <Text style={{color: '#6a2c70'}}>{date}</Text>
          <Text style={{fontWeight: 'bold'}}>{`${skuAmount} products`}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end'
        }}>
        <View
          style={{
            borderRadius: 8,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#D9C476',
            width: '50%'
          }}>
          <View
            style={{
              backgroundColor: 'white',
              margin: '1%',
              padding: '8%',
              borderBottomLeftRadius: 8,
              borderTopLeftRadius: 8
            }}>
            <MaterialIcon name="basket" size={25} color={'#A2CD37'} />
          </View>
          <View style={{left: '20%'}}>
            <Text style={{fontWeight: 'bold'}}>{`$${cartPrice}`}</Text>
          </View>
        </View>
        <MaterialIcon name="chevron-right" size={35} color={'orange'} />
      </View>
    </View>
  );
};

export default HistoryCard;
