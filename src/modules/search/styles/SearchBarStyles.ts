import {ViewStyle} from 'react-native';

interface SelectedStyles {
  container: ViewStyle;
  searchContainer: ViewStyle;
  search: ViewStyle;
  placeHolderColor: string;
  iconColor: string;
  microphone: ViewStyle;
}

interface SearchBarStyles {
  dark: SelectedStyles;
  light: SelectedStyles;
}

const commonStyles: SelectedStyles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  search: {
    margin: '4%'
  },
  placeHolderColor: '',
  iconColor: '',
  microphone: {
    margin: '2%'
  }
};

const searchBarStyles: SearchBarStyles = {
  dark: {
    ...commonStyles,
    container: {
      ...commonStyles.container,
      backgroundColor: '#5f4001'
    },
    placeHolderColor: '#FFA500',
    iconColor: '#FFA500'
  },
  light: {
    ...commonStyles,
    container: {
      ...commonStyles.container,
      backgroundColor: '#FFFFFF'
    },
    placeHolderColor: '#616060',
    iconColor: '#FFA500'
  }
};

export default searchBarStyles;
