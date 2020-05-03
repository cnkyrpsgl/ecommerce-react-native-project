import {createAction} from '@reduxjs/toolkit';
import {BannerItem} from './campaignTypes';

const campaignActions = {
  requestGetCampaigns: createAction<void>('GET_CAMPAIGNS_REQUEST'),
  successGetCampaigns: createAction<BannerItem[]>('GET_CAMPAIGNS_SUCCESS'),
  errorGetCampaigns: createAction<string>('GET_CAMPAIGNS_ERROR'),

  requestGetBanners: createAction<void>('GET_BANNERS_REQUEST'),
  successGetBanners: createAction<BannerItem[]>('GET_BANNERS_SUCCESS'),
  errorGetBanners: createAction<string>('GET_BANNERS_ERROR')
};

export default campaignActions;
