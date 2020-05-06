import {TextStyle, ViewStyle} from 'react-native';

interface SelectedStyles {
  container: ViewStyle;
  title: TextStyle;
  flatList: ViewStyle;
  contentContainer: ViewStyle;
}

interface PopularSearchStyles {
  dark: SelectedStyles;
  light: SelectedStyles;
}

const popularSearchStyles: PopularSearchStyles = {
  dark: {
    container: {
      marginVertical: '5%'
    },
    title: {
      color: '#52ef26',
      marginHorizontal: '3%'
    },
    flatList: {
      backgroundColor: '#5f4001',
      paddingVertical: '5%',
      marginVertical: '3%'
    },
    contentContainer: {
      marginHorizontal: '3%'
    }
  },
  light: {
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
  }
};

export default popularSearchStyles;
