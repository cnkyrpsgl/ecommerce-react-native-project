import {TextStyle, ViewStyle} from 'react-native';

interface PopularProductStyles {
  container: ViewStyle;
  name: TextStyle;
}

const popularProductStyles: PopularProductStyles = {
  container: {
    borderWidth: 0.2,
    borderRadius: 8,
    padding: '8%',
    borderColor: 'grey'
  },
  name: {
    color: '#b83b5e'
  }
};

export default popularProductStyles;
