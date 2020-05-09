import {ViewStyle} from 'react-native';

interface SelectedStyles {
  container: ViewStyle;
}

interface CampaingSceneStyles {
  dark: SelectedStyles;
  light: SelectedStyles;
}

const commonStyles: SelectedStyles = {
  container: {
    flex: 1,
    padding: '4%'
  }
};

const campaingSceneStyles: CampaingSceneStyles = {
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

export default campaingSceneStyles;
