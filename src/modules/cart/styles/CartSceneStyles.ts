import {ViewStyle} from 'react-native';

interface SelectedStyles {
  container: ViewStyle;
}

interface CartSceneStyles {
  dark: SelectedStyles;
  light: SelectedStyles;
}
const commonStyles: SelectedStyles = {
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: '5%'
  }
};

const cartSceneStyles: CartSceneStyles = {
  dark: {
    container: {
      ...commonStyles.container,
      backgroundColor: '#9e7009'
    }
  },
  light: {
    container: {
      ...commonStyles.container,
      backgroundColor: '#f6f6f6'
    }
  }
};

export default cartSceneStyles;
