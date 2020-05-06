import {TextStyle, ViewStyle} from 'react-native';

interface SelectedStyles {
  container: ViewStyle;
  actionText: TextStyle;
}

interface LanguageOptionsStyles {
  dark: SelectedStyles;
  light: SelectedStyles;
}

const languageOptionsStyles: LanguageOptionsStyles = {
  dark: {
    container: {
      backgroundColor: '#5f4001',
      borderWidth: 1,
      borderRadius: 8,
      borderColor: 'orange',
      marginVertical: '3%',
      alignItems: 'center',
      padding: '5%'
    },
    actionText: {
      color: 'orange',
      fontSize: 20
    }
  },
  light: {
    container: {
      backgroundColor: '#ffffff',
      borderWidth: 1,
      borderRadius: 8,
      borderColor: 'orange',
      marginVertical: '3%',
      alignItems: 'center',
      padding: '5%'
    },
    actionText: {
      color: 'orange',
      fontSize: 20
    }
  }
};

export default languageOptionsStyles;
