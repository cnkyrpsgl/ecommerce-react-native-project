import React from 'react';
import {GestureResponderEvent, Text, TouchableOpacity} from 'react-native';

const ActionButton = ({
  title,
  action
}: {
  title: string;
  action: (event: GestureResponderEvent) => void;
}) => {
  return (
    <TouchableOpacity
      onPress={action}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        marginVertical: '5%',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'orange',
        backgroundColor: 'white'
      }}>
      <Text style={{fontSize: 18, color: 'orange'}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ActionButton;
