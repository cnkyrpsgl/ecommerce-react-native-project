import React from 'react';
import {FlatList, View} from 'react-native';
import EmptyCardNote from '../components/EmptyCardNote';
import ActionButton from '../../../common/components/ActionButton';
import {cartData} from '../constants';
import CartItem from '../components/CartItem';

const CartScene = ({navigation}: {navigation: any}) => {
  const navigateToHome = () => navigation.navigate('Home');
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        marginHorizontal: '5%'
      }}>
      {cartData.length > 0 ? (
        <FlatList
          data={cartData}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => <CartItem {...item} />}
        />
      ) : (
        <>
          <EmptyCardNote />
          <ActionButton title={'Start Shopping'} action={navigateToHome} />
        </>
      )}
    </View>
  );
};

export default CartScene;
