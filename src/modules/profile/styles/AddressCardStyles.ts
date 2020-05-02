import {TextStyle, ViewStyle} from 'react-native';

interface AddressCardStyles {
  container: ViewStyle;
  upperContainer: ViewStyle;
  title: TextStyle;
  actionContainer: ViewStyle;
}

const addressCardStyles: AddressCardStyles = {
  container: {
    padding: '5%',
    borderRadius: 8,
    backgroundColor: 'white',
    marginVertical: '3%',
    height: 125
  },
  upperContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '4%'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 0.3
  }
};

export default addressCardStyles;
