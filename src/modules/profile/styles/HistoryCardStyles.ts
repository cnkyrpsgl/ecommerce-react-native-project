import {TextStyle, ViewStyle} from 'react-native';

interface HistoryCardStyles {
  container: ViewStyle;
  detailContainer: ViewStyle;
  typeIcon: ViewStyle;
  date: TextStyle;
  amount: TextStyle;
  actionContainer: ViewStyle;
  amountContainer: ViewStyle;
  basketContainer: ViewStyle;
  priceContainer: ViewStyle;
  price: TextStyle;
}
const historyCardStyles: HistoryCardStyles = {
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
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
    padding: '3%'
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
    backgroundColor: 'white',
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
};

export default historyCardStyles;
