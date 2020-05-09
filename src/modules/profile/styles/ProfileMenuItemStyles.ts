import {TextStyle, ViewStyle} from 'react-native';

interface SelectedStyles {
  container: ViewStyle;
  contentContainer: ViewStyle;
  title: TextStyle;
}

interface ProfileMenuItemStyles {
  dark: SelectedStyles;
  light: SelectedStyles;
}

const commonStyles: SelectedStyles = {
  container: {
    justifyContent: 'center',
    height: 60,
    marginVertical: '5%',
    borderRadius: 8
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '3%'
  },
  title: {
    fontSize: 15
  }
};

const profileMenuItemStyles: ProfileMenuItemStyles = {
  dark: {
    ...commonStyles,
    container: {
      ...commonStyles.container,
      backgroundColor: '#5f4001'
    },
    title: {
      ...commonStyles.title,
      color: '#f08a5d'
    }
  },
  light: {
    ...commonStyles,
    container: {
      ...commonStyles.container,
      backgroundColor: '#ffffff'
    },
    title: {
      ...commonStyles.title,
      color: '#f08a5d'
    }
  }
};

export default profileMenuItemStyles;
