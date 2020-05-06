interface Header {
  tintColor: string;
  backgroundColor: string;
}

interface SelectedStyles {
  header: Header;
}

interface NavigatorStyles {
  dark: SelectedStyles;
  light: SelectedStyles;
}

const navigatorStyles: NavigatorStyles = {
  dark: {
    header: {
      tintColor: '#bb650b',
      backgroundColor: '#362803'
    }
  },
  light: {
    header: {
      tintColor: '#FFFFFF',
      backgroundColor: '#FFA500'
    }
  }
};

export default navigatorStyles;
