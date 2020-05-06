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

const profileMenuItemStyles: ProfileMenuItemStyles = {
  dark: {
    container: {
      justifyContent: 'center',
      height: 60,
      marginVertical: '5%',
      borderRadius: 8,
      backgroundColor: '#5f4001'
    },
    contentContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: '3%'
    },
    title: {
      fontSize: 15,
      color: '#f08a5d'
    }
  },
  light: {
    container: {
      justifyContent: 'center',
      height: 60,
      marginVertical: '5%',
      borderRadius: 8,
      backgroundColor: '#ffffff'
    },
    contentContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: '3%'
    },
    title: {
      fontSize: 15,
      color: '#f08a5d'
    }
  }
};

export default profileMenuItemStyles;
