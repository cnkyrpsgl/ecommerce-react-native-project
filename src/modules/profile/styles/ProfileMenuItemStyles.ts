import {TextStyle, ViewStyle} from 'react-native';

interface ProfileMenuItemStyles {
  container: ViewStyle;
  contentContainer: ViewStyle;
  title: TextStyle;
}

const profileMenuItemStyles: ProfileMenuItemStyles = {
  container: {
    justifyContent: 'center',
    height: 60,
    marginVertical: '5%',
    borderRadius: 8,
    backgroundColor: 'white'
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
};

export default profileMenuItemStyles;
