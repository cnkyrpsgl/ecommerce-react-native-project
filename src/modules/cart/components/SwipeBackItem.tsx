import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from '../styles/SwipeBackItemStyles';
import {Mode} from 'react-native-dark-mode';

const SwipeBackItem = ({mode}: {mode: Mode}) => {
  return (
    <TouchableOpacity style={styles[mode].container}>
      <Text style={styles[mode].delete}>Delete</Text>
    </TouchableOpacity>
  );
};

export default SwipeBackItem;
