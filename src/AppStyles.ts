interface Navigator {
  activeColor: string;
  inactiveColor: string;
  backgroundColor: string;
}

interface SelectedStyles {
  navigator: Navigator;
}

interface AppStyles {
  dark: SelectedStyles;
  light: SelectedStyles;
}

const appStyles: AppStyles = {
  dark: {
    navigator: {
      activeColor: '#bb650b',
      inactiveColor: '#bb650b',
      backgroundColor: '#362803'
    }
  },
  light: {
    navigator: {
      activeColor: '#FFFFFF',
      inactiveColor: '#FFFFFF',
      backgroundColor: '#FFA500'
    }
  }
};

export default appStyles;
