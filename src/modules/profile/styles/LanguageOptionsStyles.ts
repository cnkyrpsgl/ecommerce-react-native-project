import {TextStyle, ViewStyle} from 'react-native';

interface LanguageOptionsStyles {
  container: ViewStyle;
  actionText: TextStyle;
}

const languageOptionsStyles: LanguageOptionsStyles = {
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

export default languageOptionsStyles;
