import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

interface SelectedStyles {
  container: ViewStyle;
  image: ImageStyle;
  categoryName: TextStyle;
}

interface CategoryCardStyles {
  dark: SelectedStyles;
  light: SelectedStyles;
}

const categoryCardStyles: CategoryCardStyles = {
  dark: {
    container: {
      borderRadius: 8,
      backgroundColor: '#000000',
      alignItems: 'center',
      margin: '2%',
      padding: '2%'
    },
    image: {
      width: 90,
      height: 80
    },
    categoryName: {
      color: '#FFFFFF'
    }
  },
  light: {
    container: {
      borderRadius: 8,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      margin: '2%',
      padding: '2%'
    },
    image: {
      width: 90,
      height: 80
    },
    categoryName: {
      color: '#000000'
    }
  }
};

export default categoryCardStyles;
