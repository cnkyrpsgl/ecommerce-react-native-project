import {ImageStyle, ViewStyle} from 'react-native';

interface CategoryCardStyles {
  container: ViewStyle;
  image: ImageStyle;
}

const categoryCardStyles: CategoryCardStyles = {
  container: {
    borderRadius: 8,
    backgroundColor: 'white',
    alignItems: 'center',
    margin: '2%',
    padding: '2%'
  },
  image: {
    width: 90,
    height: 80
  }
};

export default categoryCardStyles;
