import {TextStyle, ViewStyle} from 'react-native';

interface SelectedStyles {
  container: ViewStyle;
  textInput: TextStyle;
  actionButtonContainer: ViewStyle;
}

interface AddressEditSceneStyles {
  dark: SelectedStyles;
  light: SelectedStyles;
}

const commonStyles: SelectedStyles = {
  container: {
    flex: 1,
    paddingHorizontal: '10%',
    paddingTop: '5%'
  },
  textInput: {
    marginVertical: '3%'
  },
  actionButtonContainer: {
    marginVertical: '5%'
  }
};

const addressEditSceneStyles: AddressEditSceneStyles = {
  dark: {
    ...commonStyles,
    container: {
      ...commonStyles.container,
      backgroundColor: '#9e7009'
    },
    textInput: {
      ...commonStyles.textInput,
      backgroundColor: '#5f4001'
    }
  },
  light: {
    ...commonStyles,
    container: {
      ...commonStyles.container,
      backgroundColor: '#f6f6f6'
    },
    textInput: {
      ...commonStyles.textInput,
      backgroundColor: '#ffffff'
    }
  }
};

export default addressEditSceneStyles;
