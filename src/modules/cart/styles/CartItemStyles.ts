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

const cartItemStyles: CartItemStyles = {
  dark: {
    container: {
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#5f4001',
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
    productName: {
      color: '#bb650b'
    },
    price: {
      fontWeight: 'bold',
      color: '#bb650b'
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
  },
  light: {
    container: {
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#ffffff',
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
    productName: {
      color: '#000000'
    },
    price: {
      fontWeight: 'bold',
      color: '#000000'
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
  }
};

export default cartItemStyles;
