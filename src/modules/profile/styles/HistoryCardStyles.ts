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

const commonStyles: SelectedStyles = {
  container: {
    flexDirection: 'row',
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
  date: {},
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
    width: '50%'
  },
  basketContainer: {
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

const historyCardStyles: HistoryCardStyles = {
  dark: {
    ...commonStyles,
    container: {
      ...commonStyles.container,
      backgroundColor: '#5f4001'
    },
    typeIcon: {
      ...commonStyles.typeIcon,
      color: '#ee5617'
    },
    date: {
      ...commonStyles.date,
      color: '#bc15d4'
    },
    amountContainer: {
      ...commonStyles.amountContainer,
      backgroundColor: '#D9C476'
    },
    basketContainer: {
      ...commonStyles.basketContainer,
      backgroundColor: '#5f4001'
    }
  },
  light: {
    ...commonStyles,
    container: {
      ...commonStyles.container,
      backgroundColor: '#ffffff'
    },
    typeIcon: {
      ...commonStyles.typeIcon,
      color: '#f08a5d'
    },
    date: {
      ...commonStyles.date,
      color: '#6a2c70'
    },
    amountContainer: {
      ...commonStyles.amountContainer,
      backgroundColor: '#D9C476'
    },
    basketContainer: {
      ...commonStyles.basketContainer,
      backgroundColor: '#ffffff'
    }
  }
};

export default historyCardStyles;
