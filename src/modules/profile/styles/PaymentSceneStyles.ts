import {ViewStyle} from 'react-native';

interface SelectedStyles {
  container: ViewStyle;
  actionContainer: ViewStyle;
}

interface PaymentSceneStyles {
  dark: SelectedStyles;
  light: SelectedStyles;
}

const commonStyles: SelectedStyles = {
  container: {
    flex: 1,
    padding: '3%'
  },
  actionContainer: {
    marginVertical: '5%'
  }
};

const paymentSceneStyles: PaymentSceneStyles = {
  dark: {
    ...commonStyles,
    container: {
      ...commonStyles.container,
      backgroundColor: '#9e7009'
    }
  },
  light: {
    ...commonStyles,
    container: {
      ...commonStyles.container,
      backgroundColor: '#f6f6f6'
    }
  }
};

export default paymentSceneStyles;
