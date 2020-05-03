import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {BannerItem, CampaignState} from './campaignTypes';
import {campaignData} from '../../../modules/campaign/constants';
import {carouselData} from '../../../modules/home/constants';
import campaignActions from './campaignActions';

const initialState: CampaignState = {
  // TODO: Change category source to backend
  campaigns: campaignData,
  banners: carouselData
};

const campaignReducer = createReducer(initialState, {
  [campaignActions.requestGetCampaigns.type]: (state: CampaignState) => {
    state.loading = true;
  },
  [campaignActions.successGetCampaigns.type]: (
    state: CampaignState,
    action: PayloadAction<BannerItem[]>
  ) => {
    state.loading = false;
    state.campaigns = action.payload;
  },
  [campaignActions.errorGetCampaigns.type]: (
    state: CampaignState,
    action: PayloadAction<string>
  ) => {
    state.loading = false;
    state.error = action.payload;
  },

  [campaignActions.requestGetBanners.type]: (state: CampaignState) => {
    state.loading = true;
  },
  [campaignActions.successGetBanners.type]: (
    state: CampaignState,
    action: PayloadAction<BannerItem[]>
  ) => {
    state.loading = false;
    state.banners = action.payload;
  },
  [campaignActions.errorGetBanners.type]: (
    state: CampaignState,
    action: PayloadAction<string>
  ) => {
    state.loading = false;
    state.error = action.payload;
  }
});

export default campaignReducer;
