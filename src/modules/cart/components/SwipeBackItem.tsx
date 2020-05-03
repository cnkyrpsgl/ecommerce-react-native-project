import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from '../styles/SwipeBackItemStyles';

const SwipeBackItem = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.delete}>Delete</Text>
    </TouchableOpacity>
  );
};

export default SwipeBackItem;
