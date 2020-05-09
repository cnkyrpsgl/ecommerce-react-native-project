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

const commonStyles: SelectedStyles = {
  container: {
    marginVertical: '5%'
  },
  title: {
    marginHorizontal: '3%'
  },
  flatList: {
    paddingVertical: '5%',
    marginVertical: '3%'
  },
  contentContainer: {
    marginHorizontal: '3%'
  }
};

const popularSearchStyles: PopularSearchStyles = {
  dark: {
    ...commonStyles,
    title: {
      ...commonStyles.title,
      color: '#52ef26'
    },
    flatList: {
      ...commonStyles.flatList,
      backgroundColor: '#5f4001'
    }
  },
  light: {
    ...commonStyles,
    title: {
      ...commonStyles.title,
      color: '#f08a5d'
    },
    flatList: {
      ...commonStyles.flatList,
      backgroundColor: '#ffffff'
    }
  }
};

export default popularSearchStyles;
