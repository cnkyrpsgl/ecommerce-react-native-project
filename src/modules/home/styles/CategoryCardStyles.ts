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

const commonStyles: SelectedStyles = {
  container: {
    borderRadius: 8,
    alignItems: 'center',
    margin: '2%',
    padding: '2%'
  },
  image: {
    width: 90,
    height: 80
  },
  categoryName: {}
};

const categoryCardStyles: CategoryCardStyles = {
  dark: {
    ...commonStyles,
    container: {
      ...commonStyles.container,
      backgroundColor: '#000000'
    },
    categoryName: {
      ...commonStyles.categoryName,
      color: '#FFFFFF'
    }
  },
  light: {
    ...commonStyles,
    container: {
      ...commonStyles.container,
      backgroundColor: '#FFFFFF'
    },
    categoryName: {
      ...commonStyles.categoryName,
      color: '#000000'
    }
  }
};

export default categoryCardStyles;
