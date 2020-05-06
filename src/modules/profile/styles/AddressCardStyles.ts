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

const addressCardStyles: AddressCardStyles = {
  dark: {
    container: {
      padding: '5%',
      borderRadius: 8,
      backgroundColor: '#5f4001',
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
  },
  light: {
    container: {
      padding: '5%',
      borderRadius: 8,
      backgroundColor: '#ffffff',
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
  }
};

export default addressCardStyles;
