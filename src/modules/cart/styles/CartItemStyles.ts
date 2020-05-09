import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

interface SelectedStyles {
  container: ViewStyle;
  productContainer: ViewStyle;
  imageContainer: ViewStyle;
  image: ImageStyle;
  textContainer: ViewStyle;
  productName: TextStyle;
  price: TextStyle;
  amountContainer: ViewStyle;
  minus: ViewStyle;
  amount: TextStyle;
  plus: ViewStyle;
}

interface CartItemStyles {
  dark: SelectedStyles;
  light: SelectedStyles;
}

const commonStyles: SelectedStyles = {
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 10,
    marginTop: '3%'
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageContainer: {
    padding: '10%'
  },
  image: {
    width: 50,
    height: 50
  },
  textContainer: {
    height: 50,
    justifyContent: 'space-between'
  },
  productName: {},
  price: {
    fontWeight: 'bold'
  },
  amountContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginRight: '3%'
  },
  minus: {
    margin: '2%'
  },
  amount: {
    fontWeight: 'bold'
  },
  plus: {
    margin: '2%'
  }
};

const cartItemStyles: CartItemStyles = {
  dark: {
    ...commonStyles,
    container: {
      ...commonStyles.container,
      backgroundColor: '#5f4001'
    },
    productName: {
      color: '#bb650b'
    },
    price: {
      ...commonStyles.price,
      color: '#bb650b'
    }
  },
  light: {
    ...commonStyles,
    container: {
      ...commonStyles.container,
      backgroundColor: '#ffffff'
    },
    productName: {
      color: '#000000'
    },
    price: {
      ...commonStyles.price,
      color: '#000000'
    }
  }
};

export default cartItemStyles;
