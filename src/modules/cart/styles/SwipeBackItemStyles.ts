import {TextStyle, ViewStyle} from 'react-native';

interface SwipeBackItemStyles {
  container: ViewStyle;
  delete: TextStyle;
}

const swipeBackItemStyles: SwipeBackItemStyles = {
  container: {
    flex: 1,
    marginTop: '3%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: 'red',
    right: 0,
    width: 80,
    height: '80%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  },
  delete: {
    color: 'white'
  }
};

export default swipeBackItemStyles;
