import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

interface PaymentCardStyles {
  container: ViewStyle;
  detailContainer: ViewStyle;
  mastercard: ImageStyle;
  cardName: TextStyle;
  cardNumber: TextStyle;
  delete: TextStyle;
}

const paymentCardStyles: PaymentCardStyles = {
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: '3%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 0.7
  },
  mastercard: {
    width: 35,
    height: 35
  },
  cardName: {
    fontWeight: 'bold'
  },
  cardNumber: {
    fontSize: 12,
    opacity: 0.5
  },
  delete: {
    color: 'orange'
  }
};

export default paymentCardStyles;
