import {ViewStyle} from 'react-native';

interface ProductCategoryStyles {
  container: ViewStyle;
}

const productCategoryStyles: ProductCategoryStyles = {
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center'
  }
};

export default productCategoryStyles;
