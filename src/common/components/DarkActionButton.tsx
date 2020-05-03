import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const DarkActionButton = ({name}: {name: string}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: '10%',
        height: 60,
        borderRadius: 8,
        backgroundColor: 'orange'
      }}>
      <Text style={{fontSize: 15, color: 'white'}}>{name}</Text>
    </TouchableOpacity>
  );
};

export default DarkActionButton;
