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

const searchBarStyles: SearchBarStyles = {
  dark: {
    container: {
      backgroundColor: '#5f4001',
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
    placeHolderColor: '#FFA500',
    iconColor: '#FFA500',
    microphone: {
      margin: '2%'
    }
  },
  light: {
    container: {
      backgroundColor: '#FFFFFF',
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
    placeHolderColor: '#616060',
    iconColor: '#FFA500',
    microphone: {
      margin: '2%'
    }
  }
};

export default searchBarStyles;
