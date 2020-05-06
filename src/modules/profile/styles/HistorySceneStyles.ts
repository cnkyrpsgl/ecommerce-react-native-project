import {ViewStyle} from 'react-native';

interface SelectedStyles {
  container: ViewStyle;
}

interface HistorySceneStyles {
  dark: SelectedStyles;
  light: SelectedStyles;
}

const historySceneStyles: HistorySceneStyles = {
  dark: {
    container: {
      flex: 1,
      backgroundColor: '#9e7009'
    }
  },
  light: {
    container: {
      flex: 1,
      backgroundColor: '#f6f6f6'
    }
  }
};

export default historySceneStyles;
