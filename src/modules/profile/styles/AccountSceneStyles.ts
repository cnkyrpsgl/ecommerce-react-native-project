import {TextStyle, ViewStyle} from 'react-native';

interface SelectedStyles {
  container: ViewStyle;
  formContainer: ViewStyle;
  input: TextStyle;
  actionContainer: ViewStyle;
}

interface AccountSceneStyles {
  dark: SelectedStyles;
  light: SelectedStyles;
}

const accountSceneStyles: AccountSceneStyles = {
  dark: {
    container: {flex: 1, backgroundColor: '#9e7009'},
    formContainer: {
      marginHorizontal: '10%',
      flex: 0.8,
      justifyContent: 'flex-start'
    },
    input: {
      marginVertical: '5%',
      backgroundColor: '#5f4001'
    },
    actionContainer: {
      flex: 0.4,
      justifyContent: 'center',
      marginHorizontal: '10%'
    }
  },
  light: {
    container: {flex: 1, backgroundColor: '#f6f6f6'},
    formContainer: {
      marginHorizontal: '10%',
      flex: 0.8,
      justifyContent: 'flex-start'
    },
    input: {
      marginVertical: '5%',
      backgroundColor: '#ffffff'
    },
    actionContainer: {
      flex: 0.4,
      justifyContent: 'center',
      marginHorizontal: '10%'
    }
  }
};

export default accountSceneStyles;
