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

interface ModalStyles {
  container: ViewStyle;
}

export const modalStyles: ModalStyles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    margin: 0,
    paddingHorizontal: '10%',
    justifyContent: 'center'
  }
};

export default profileSceneStyles;
