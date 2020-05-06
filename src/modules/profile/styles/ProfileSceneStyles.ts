import {ViewStyle} from 'react-native';

interface SelectedStyles {
  container: ViewStyle;
  contentContainer: ViewStyle;
}

interface ProfileSceneStyles {
  dark: SelectedStyles;
  light: SelectedStyles;
}

const profileSceneStyles: ProfileSceneStyles = {
  dark: {
    container: {
      flex: 1,
      paddingHorizontal: '10%',
      backgroundColor: '#9e7009'
    },
    contentContainer: {
      justifyContent: 'center',
      flex: 1
    }
  },
  light: {
    container: {
      flex: 1,
      paddingHorizontal: '10%',
      backgroundColor: '#f6f6f6'
    },
    contentContainer: {
      justifyContent: 'center',
      flex: 1
    }
  }
};

interface selectedModalStyles {
  container: ViewStyle;
}

interface ModalStyles {
  dark: selectedModalStyles;
  light: selectedModalStyles;
}

export const modalStyles: ModalStyles = {
  dark: {
    container: {
      flex: 1,
      backgroundColor: '#9e7009',
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      margin: 0,
      paddingHorizontal: '10%',
      justifyContent: 'center'
    }
  },
  light: {
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      margin: 0,
      paddingHorizontal: '10%',
      justifyContent: 'center'
    }
  }
};

export default profileSceneStyles;
