import {TextStyle, ViewStyle} from 'react-native';

interface SelectedStyles {
  container: ViewStyle;
  name: TextStyle;
}

interface PopularProductStyles {
  dark: SelectedStyles;
  light: SelectedStyles;
}

const popularProductStyles: PopularProductStyles = {
  dark: {
    container: {
      borderWidth: 0.2,
      borderRadius: 8,
      padding: '8%',
      borderColor: 'grey'
    },
    name: {
      color: '#e7134e'
    }
  },
  light: {
    container: {
      borderWidth: 0.2,
      borderRadius: 8,
      padding: '8%',
      borderColor: 'grey'
    },
    name: {
      color: '#b83b5e'
    }
  }
};

export default popularProductStyles;
