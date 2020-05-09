import {TextStyle, ViewStyle} from 'react-native';

interface SelectedStyles {
  container: ViewStyle;
  upperContainer: ViewStyle;
  title: TextStyle;
  actionContainer: ViewStyle;
}

interface AddressCardStyles {
  dark: SelectedStyles;
  light: SelectedStyles;
}

const commonStyles: SelectedStyles = {
  container: {
    padding: '5%',
    borderRadius: 8,
    marginVertical: '3%',
    height: 125
  },
  upperContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '4%'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 0.3
  }
};

const addressCardStyles: AddressCardStyles = {
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

export default addressCardStyles;
