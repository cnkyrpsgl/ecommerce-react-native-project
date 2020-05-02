import {TextStyle, ViewStyle} from 'react-native';

interface EmptyCardNoteStyles {
  container: ViewStyle;
  iconContainer: ViewStyle;
  note: TextStyle;
}

const emptyCardNoteStyles: EmptyCardNoteStyles = {
  container: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '3%'
  },
  iconContainer: {
    marginVertical: '10%',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: '5%',
    paddingHorizontal: '7%'
  },
  note: {
    fontSize: 16,
    textAlign: 'center',
    color: '#f08a5d'
  }
};

export default emptyCardNoteStyles;
