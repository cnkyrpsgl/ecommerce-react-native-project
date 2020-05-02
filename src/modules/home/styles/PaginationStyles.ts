import {ViewStyle} from 'react-native';

interface PaginationStyles {
  dot: ViewStyle;
}

const paginationStyles: PaginationStyles = {
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: 'white'
  }
};

export default paginationStyles;
