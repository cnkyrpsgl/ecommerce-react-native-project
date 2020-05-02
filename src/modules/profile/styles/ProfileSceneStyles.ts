import {ViewStyle} from 'react-native';

interface ProfileSceneStyles {
  container: ViewStyle;
  contentContainer: ViewStyle;
}

const profileSceneStyles: ProfileSceneStyles = {
  container: {
    flex: 1,
    marginHorizontal: '10%'
  },
  contentContainer: {
    justifyContent: 'center',
    flex: 1
  }
};

export default profileSceneStyles;
