import React from 'react';
import {TextInput, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchBar = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <MaterialIcon
          name="magnify"
          size={30}
          style={{margin: '4%'}}
          color={'orange'}
        />
        <TextInput placeholder={'Search Product'} />
      </View>
      <View>
        <MaterialIcon
          name="microphone-outline"
          size={30}
          style={{margin: '2%'}}
          color={'orange'}
        />
      </View>
    </View>
  );
};

export default SearchBar;
