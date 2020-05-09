import {TextStyle, ViewStyle} from 'react-native';

interface SelectedStyles {
  container: ViewStyle;
  iconContainer: ViewStyle;
  note: TextStyle;
}

interface EmptyCardNoteStyles {
  dark: SelectedStyles;
  light: SelectedStyles;
}

const commonStyles: SelectedStyles = {
  container: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '3%'
  },
  iconContainer: {
    marginVertical: '10%',
    borderRadius: 10,
    paddingVertical: '5%',
    paddingHorizontal: '7%'
  },
  note: {
    fontSize: 16,
    textAlign: 'center'
  }
};

const emptyCardNoteStyles: EmptyCardNoteStyles = {
  dark: {
    ...commonStyles,
    iconContainer: {
      ...commonStyles.iconContainer,
      backgroundColor: '#5f4001'
    },
    note: {
      ...commonStyles.note,
      color: '#52ef26'
    }
  },
  light: {
    ...commonStyles,
    iconContainer: {
      ...commonStyles.iconContainer,
      backgroundColor: '#ffffff'
    },
    note: {
      ...commonStyles.note,
      color: '#f08a5d'
    }
  }
};

export default emptyCardNoteStyles;
