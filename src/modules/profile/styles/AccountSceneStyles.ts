import {TextStyle, ViewStyle} from 'react-native';

interface AccountSceneStyles {
  container: ViewStyle;
  input: TextStyle;
  actionContainer: ViewStyle;
}

const accountSceneStyles: AccountSceneStyles = {
  container: {
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

export default accountSceneStyles;
