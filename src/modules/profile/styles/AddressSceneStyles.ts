import {TextStyle, ViewStyle} from 'react-native';

interface SelectedStyles {
  container: ViewStyle;
  titleContainer: ViewStyle;
  title: TextStyle;
}

interface AddressSceneStyles {
  dark: SelectedStyles;
  light: SelectedStyles;
}

const addressSceneStyles: AddressSceneStyles = {
  dark: {
    container: {
      flex: 1,
      backgroundColor: '#9e7009',
      paddingHorizontal: '10%'
    },
    titleContainer: {
      paddingVertical: '5%'
    },
    title: {
      fontWeight: 'bold',
      fontSize: 20
    }
  },
  light: {
    container: {
      flex: 1,
      backgroundColor: '#f6f6f6',
      paddingHorizontal: '10%'
    },
    titleContainer: {
      paddingVertical: '5%'
    },
    title: {
      fontWeight: 'bold',
      fontSize: 20
    }
  }
};

export default addressSceneStyles;
