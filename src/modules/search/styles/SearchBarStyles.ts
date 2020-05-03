import {ViewStyle} from 'react-native';

interface SearchBarStyles {
  container: ViewStyle;
  searchContainer: ViewStyle;
  search: ViewStyle;
  microphone: ViewStyle;
}

const searchBarStyles: SearchBarStyles = {
  container: {
    backgroundColor: 'white',
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
  microphone: {
    margin: '2%'
  }
};

export default searchBarStyles;
