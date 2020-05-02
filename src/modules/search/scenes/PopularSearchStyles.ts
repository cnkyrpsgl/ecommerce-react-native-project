import {TextStyle, ViewStyle} from 'react-native';

interface PopularSearchStyles {
  container: ViewStyle;
  title: TextStyle;
  flatList: ViewStyle;
  contentContainer: ViewStyle;
}

const popularSearchStyles: PopularSearchStyles = {
  container: {
    marginVertical: '5%'
  },
  title: {
    color: '#f08a5d',
    marginHorizontal: '3%'
  },
  flatList: {
    backgroundColor: 'white',
    paddingVertical: '5%',
    marginVertical: '3%'
  },
  contentContainer: {
    marginHorizontal: '3%'
  }
};

export default popularSearchStyles;
