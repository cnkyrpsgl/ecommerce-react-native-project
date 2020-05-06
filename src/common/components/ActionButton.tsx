import React from 'react';
import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  ViewStyle
} from 'react-native';
import {useDarkModeContext} from 'react-native-dark-mode';

const ActionButton = ({
  title,
  action
}: {
  title: string;
  action: (event: GestureResponderEvent) => void;
}) => {
  const mode = useDarkModeContext();
  return (
    <TouchableOpacity onPress={action} style={styles[mode].container}>
      <Text style={{fontSize: 18, color: 'orange'}}>{title}</Text>
    </TouchableOpacity>
  );
};

interface SelectedStyles {
  container: ViewStyle;
}

interface ActionButtonStyles {
  dark: SelectedStyles;
  light: SelectedStyles;
}

const styles: ActionButtonStyles = {
  dark: {
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      marginVertical: '5%',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: 'orange',
      backgroundColor: '#5f4001'
    }
  },
  light: {
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      marginVertical: '5%',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: 'orange',
      backgroundColor: '#ffffff'
    }
  }
};

export default ActionButton;
