import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

interface SelectedStyles {
  container: ViewStyle;
  detailContainer: ViewStyle;
  mastercard: ImageStyle;
  cardName: TextStyle;
  cardNumber: TextStyle;
  delete: TextStyle;
}

interface PaymentCardStyles {
  dark: SelectedStyles;
  light: SelectedStyles;
}

const commonStyles: SelectedStyles = {
  container: {
    flexDirection: 'row',
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

const paymentCardStyles: PaymentCardStyles = {
  dark: {
    ...commonStyles,
    container: {
      ...commonStyles.container,
      backgroundColor: '#5f4001'
    }
  },
  light: {
    ...commonStyles,
    container: {
      ...commonStyles.container,
      backgroundColor: '#ffffff'
    }
  }
};

export default paymentCardStyles;
