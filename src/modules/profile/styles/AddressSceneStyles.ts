import {TextStyle, ViewStyle} from 'react-native';

interface SelectedStyles {
  container: ViewStyle;
  titleContainer: ViewStyle;
  title: TextStyle;
}

interface AddressSceneStyles {
  dark: SelectedStyles;
  light: SelectedStyles;
}

const commonStyles: SelectedStyles = {
  container: {
    flex: 1,
    paddingHorizontal: '10%'
  },
  titleContainer: {
    paddingVertical: '5%'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20
  }
};

const addressSceneStyles: AddressSceneStyles = {
  dark: {
    ...commonStyles,
    container: {
      ...commonStyles.container,
      backgroundColor: '#9e7009'
    }
  },
  light: {
    ...commonStyles,
    container: {
      ...commonStyles.container,
      backgroundColor: '#f6f6f6'
    }
  }
};

export default addressSceneStyles;
