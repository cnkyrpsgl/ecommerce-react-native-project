import React from 'react';
import {FlatList, View} from 'react-native';
import EmptyCardNote from '../components/EmptyCardNote';
import ActionButton from '../../../common/components/ActionButton';
import {cartData} from '../constants';
import CartItem from '../components/CartItem';
import styles from '../styles/CartSceneStyles';

const CartScene = ({navigation}: {navigation: any}) => {
  const navigateToHome = () => navigation.navigate('Home');
  return (
    <View style={styles.container}>
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
