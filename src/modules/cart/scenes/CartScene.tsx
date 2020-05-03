import React from 'react';
import {View} from 'react-native';
import EmptyCardNote from '../components/EmptyCardNote';
import ActionButton from '../../../common/components/ActionButton';
import CartItem from '../components/CartItem';
import styles from '../styles/CartSceneStyles';
import {useSelector} from 'react-redux';
import {cartSelectors} from '../../../core/cart/stores';
import {SwipeListView} from 'react-native-swipe-list-view';
import SwipeBackItem from '../components/SwipeBackItem';

const CartScene = ({navigation}: {navigation: any}) => {
  const {cart} = useSelector(cartSelectors);
  const cartData = Object.values(cart);
  const navigateToHome = () => navigation.navigate('Home');
  return (
    <View style={styles.container}>
      {cartData.length > 0 ? (
        <SwipeListView
          keyExtractor={(_, index: number) => index.toString()}
          useFlatList={true}
          data={cartData}
          renderItem={(rowData) => <CartItem {...rowData.item} />}
          renderHiddenItem={SwipeBackItem}
          rightOpenValue={-75}
          disableRightSwipe
          stopRightSwipe={-75}
          closeOnRowOpen={false}
          closeOnScroll={false}
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
