import {ViewStyle} from 'react-native';

interface SelectedStyles {
  container: ViewStyle;
}

interface CampaingSceneStyles {
  dark: SelectedStyles;
  light: SelectedStyles;
}

const campaingSceneStyles: CampaingSceneStyles = {
  dark: {
    container: {
      flex: 1,
      padding: '4%',
      backgroundColor: '#9e7009'
    }
  },
  light: {
    container: {
      flex: 1,
      padding: '4%',
      backgroundColor: '#f6f6f6'
    }
  }
};

export default campaingSceneStyles;
