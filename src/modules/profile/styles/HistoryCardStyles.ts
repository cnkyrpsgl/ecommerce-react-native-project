import {TextStyle, ViewStyle} from 'react-native';

interface SelectedStyles {
  container: ViewStyle;
  detailContainer: ViewStyle;
  typeIcon: TextStyle;
  date: TextStyle;
  amount: TextStyle;
  actionContainer: ViewStyle;
  amountContainer: ViewStyle;
  basketContainer: ViewStyle;
  priceContainer: ViewStyle;
  price: TextStyle;
}

interface HistoryCardStyles {
  dark: SelectedStyles;
  light: SelectedStyles;
}
const historyCardStyles: HistoryCardStyles = {
  dark: {
    container: {
      flexDirection: 'row',
      backgroundColor: '#5f4001',
      paddingVertical: '4%',
      marginBottom: '1%',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    detailContainer: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    typeIcon: {
      padding: '3%',
      color: '#ee5617'
    },
    date: {
      color: '#bc15d4'
    },
    amount: {
      fontWeight: 'bold'
    },
    actionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    amountContainer: {
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#D9C476',
      width: '50%'
    },
    basketContainer: {
      backgroundColor: '#5f4001',
      margin: '1%',
      padding: '8%',
      borderBottomLeftRadius: 8,
      borderTopLeftRadius: 8
    },
    priceContainer: {
      left: '20%'
    },
    price: {
      fontWeight: 'bold'
    }
  },
  light: {
    container: {
      flexDirection: 'row',
      backgroundColor: '#ffffff',
      paddingVertical: '4%',
      marginBottom: '1%',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    detailContainer: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    typeIcon: {
      padding: '3%',
      color: '#f08a5d'
    },
    date: {
      color: '#6a2c70'
    },
    amount: {
      fontWeight: 'bold'
    },
    actionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    amountContainer: {
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#D9C476',
      width: '50%'
    },
    basketContainer: {
      backgroundColor: '#ffffff',
      margin: '1%',
      padding: '8%',
      borderBottomLeftRadius: 8,
      borderTopLeftRadius: 8
    },
    priceContainer: {
      left: '20%'
    },
    price: {
      fontWeight: 'bold'
    }
  }
};

export default historyCardStyles;
