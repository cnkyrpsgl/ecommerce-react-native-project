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

const commonStyles: SelectedStyles = {
  container: {flex: 1},
  formContainer: {
    marginHorizontal: '10%',
    flex: 0.8,
    justifyContent: 'flex-start'
  },
  input: {
    marginVertical: '5%'
  },
  actionContainer: {
    flex: 0.4,
    justifyContent: 'center',
    marginHorizontal: '10%'
  }
};

const accountSceneStyles: AccountSceneStyles = {
  dark: {
    ...commonStyles,
    container: {...commonStyles.container, backgroundColor: '#9e7009'},
    input: {
      ...commonStyles.input,
      backgroundColor: '#5f4001'
    }
  },
  light: {
    ...commonStyles,
    container: {...commonStyles.container, backgroundColor: '#f6f6f6'},
    input: {
      ...commonStyles.input,
      backgroundColor: '#ffffff'
    }
  }
};

export default accountSceneStyles;
