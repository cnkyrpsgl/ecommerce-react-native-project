import React from 'react';
import {Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import {useDarkModeContext} from 'react-native-dark-mode';

const DarkActionButton = ({name}: {name: string}) => {
  const mode = useDarkModeContext();
  return (
    <TouchableOpacity style={styles[mode].container}>
      <Text style={styles[mode].actionText}>{name}</Text>
    </TouchableOpacity>
  );
};

interface SelectedStyles {
  container: ViewStyle;
  actionText: TextStyle;
}

interface DarkActionButtonStyles {
  dark: SelectedStyles;
  light: SelectedStyles;
}

const styles: DarkActionButtonStyles = {
  dark: {
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: '10%',
      height: 60,
      borderRadius: 8,
      backgroundColor: '#5f4001'
    },
    actionText: {
      fontSize: 15,
      color: '#000000'
    }
  },
  light: {
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: '10%',
      height: 60,
      borderRadius: 8,
      backgroundColor: '#ffa500'
    },
    actionText: {fontSize: 15, color: '#ffffff'}
  }
};

export default DarkActionButton;
