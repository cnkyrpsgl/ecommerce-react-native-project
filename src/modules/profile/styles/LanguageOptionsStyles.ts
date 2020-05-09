import {TextStyle, ViewStyle} from 'react-native';

interface SelectedStyles {
  container: ViewStyle;
  actionText: TextStyle;
}

interface LanguageOptionsStyles {
  dark: SelectedStyles;
  light: SelectedStyles;
}

const commonStyles: SelectedStyles = {
  container: {
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
};

const languageOptionsStyles: LanguageOptionsStyles = {
  dark: {
    ...commonStyles,
    container: {
      ...commonStyles.container,
      backgroundColor: '#5f4001'
    }
  },
  light: {
    ...commonStyles,
    container: {
      ...commonStyles.container,
      backgroundColor: '#ffffff'
    }
  }
};

export default languageOptionsStyles;
