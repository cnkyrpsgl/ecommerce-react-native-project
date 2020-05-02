import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

interface CartItemStyles {
  container: ViewStyle;
  productContainer: ViewStyle;
  imageContainer: ViewStyle;
  image: ImageStyle;
  textContainer: ViewStyle;
  price: TextStyle;
  amountContainer: ViewStyle;
  minus: ViewStyle;
  amount: TextStyle;
  plus: ViewStyle;
}

const cartItemStyles: CartItemStyles = {
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
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

export default cartItemStyles;
