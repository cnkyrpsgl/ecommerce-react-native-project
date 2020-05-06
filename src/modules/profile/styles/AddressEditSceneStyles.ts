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

const addressEditSceneStyles: AddressEditSceneStyles = {
  dark: {
    container: {
      flex: 1,
      backgroundColor: '#9e7009',
      paddingHorizontal: '10%',
      paddingTop: '5%'
    },
    textInput: {
      marginVertical: '3%',
      backgroundColor: '#5f4001'
    },
    actionButtonContainer: {
      marginVertical: '5%'
    }
  },
  light: {
    container: {
      flex: 1,
      backgroundColor: '#f6f6f6',
      paddingHorizontal: '10%',
      paddingTop: '5%'
    },
    textInput: {
      marginVertical: '3%',
      backgroundColor: '#ffffff'
    },
    actionButtonContainer: {
      marginVertical: '5%'
    }
  }
};

export default addressEditSceneStyles;
