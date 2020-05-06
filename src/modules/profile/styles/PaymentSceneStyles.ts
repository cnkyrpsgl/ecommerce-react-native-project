import {ViewStyle} from 'react-native';

interface SelectedStyles {
  container: ViewStyle;
  actionContainer: ViewStyle;
}

interface PaymentSceneStyles {
  dark: SelectedStyles;
  light: SelectedStyles;
}

const paymentSceneStyles: PaymentSceneStyles = {
  dark: {
    container: {
      flex: 1,
      padding: '3%',
      backgroundColor: '#9e7009'
    },
    actionContainer: {
      marginVertical: '5%'
    }
  },
  light: {
    container: {
      flex: 1,
      padding: '3%',
      backgroundColor: '#f6f6f6'
    },
    actionContainer: {
      marginVertical: '5%'
    }
  }
};

export default paymentSceneStyles;
