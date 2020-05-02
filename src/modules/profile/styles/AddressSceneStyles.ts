import {TextStyle, ViewStyle} from 'react-native';

interface AddressSceneStyles {
  container: ViewStyle;
  titleContainer: ViewStyle;
  title: TextStyle;
}

const addressSceneStyles: AddressSceneStyles = {
  container: {
    marginHorizontal: '10%'
  },
  titleContainer: {
    paddingVertical: '5%'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20
  }
};

export default addressSceneStyles;
