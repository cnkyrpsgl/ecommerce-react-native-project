import {TextStyle, ViewStyle} from 'react-native';

interface SelectedStyles {
  container: ViewStyle;
  delete: TextStyle;
}

interface SwipeBackItemStyles {
  dark: SelectedStyles;
  light: SelectedStyles;
}

const commonStyles: SelectedStyles = {
  container: {
    flex: 1,
    marginTop: '3%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    width: 80,
    height: '80%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  },
  delete: {}
};

const swipeBackItemStyles: SwipeBackItemStyles = {
  dark: {
    ...commonStyles,
    container: {
      ...commonStyles.container,
      backgroundColor: '#000000'
    },
    delete: {
      ...commonStyles.delete,
      color: '#ff0000'
    }
  },
  light: {
    ...commonStyles,
    container: {
      ...commonStyles.container,
      backgroundColor: '#ff0000'
    },
    delete: {
      ...commonStyles.delete,
      color: '#ffffff'
    }
  }
};

export default swipeBackItemStyles;
