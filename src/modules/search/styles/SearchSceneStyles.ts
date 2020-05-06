import {ViewStyle} from 'react-native';

interface SelectedStyles {
  container: ViewStyle;
}

interface SearchSceneStyles {
  dark: SelectedStyles;
  light: SelectedStyles;
}

const searchSceneStyles: SearchSceneStyles = {
  dark: {
    container: {
      backgroundColor: '#9e7009',
      flex: 1
    }
  },
  light: {
    container: {
      backgroundColor: '#f6f6f6',
      flex: 1
    }
  }
};

export default searchSceneStyles;
