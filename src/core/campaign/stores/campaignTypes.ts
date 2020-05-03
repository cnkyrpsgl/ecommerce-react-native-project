import {OperationState} from '../../redux';
import {ImageSourcePropType} from 'react-native';

export interface BannerItem {
  imgSource: ImageSourcePropType;
}

export interface CampaignState extends OperationState {
  campaigns: BannerItem[];
  banners: BannerItem[];
}
