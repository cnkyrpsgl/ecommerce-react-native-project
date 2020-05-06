import {ViewStyle} from 'react-native';

interface SelectedStyles {
  container: ViewStyle;
}

interface HomeSceneStyles {
  dark: SelectedStyles;
  light: SelectedStyles;
}

const homeSceneStyles: HomeSceneStyles = {
  dark: {
    container: {
      backgroundColor: '#9e7009'
    }
  },
  light: {
    container: {
      backgroundColor: '#f6f6f6'
    }
  }
};

export default homeSceneStyles;
