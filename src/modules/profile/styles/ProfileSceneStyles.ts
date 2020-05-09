import {ViewStyle} from 'react-native';

interface SelectedStyles {
  container: ViewStyle;
  contentContainer: ViewStyle;
}

interface ProfileSceneStyles {
  dark: SelectedStyles;
  light: SelectedStyles;
}

const commonStyles: SelectedStyles = {
  container: {
    flex: 1,
    paddingHorizontal: '10%'
  },
  contentContainer: {
    justifyContent: 'center',
    flex: 1
  }
};

const profileSceneStyles: ProfileSceneStyles = {
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

interface selectedModalStyles {
  container: ViewStyle;
}

interface ModalStyles {
  dark: selectedModalStyles;
  light: selectedModalStyles;
}

const commonModalStyles: selectedModalStyles = {
  container: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    margin: 0,
    paddingHorizontal: '10%',
    justifyContent: 'center'
  }
};

export const modalStyles: ModalStyles = {
  dark: {
    ...commonModalStyles,
    container: {
      ...commonModalStyles.container,
      backgroundColor: '#9e7009'
    }
  },
  light: {
    ...commonModalStyles,
    container: {
      ...commonModalStyles.container,
      backgroundColor: '#ffffff'
    }
  }
};

export default profileSceneStyles;
