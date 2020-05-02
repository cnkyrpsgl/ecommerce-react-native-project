import {ImageStyle} from 'react-native';

interface CampaignCardStyles {
  image: ImageStyle;
}

const campaignCardStyles: CampaignCardStyles = {
  image: {
    height: 150,
    borderRadius: 10,
    width: '100%',
    marginVertical: '2%'
  }
};

export default campaignCardStyles;
