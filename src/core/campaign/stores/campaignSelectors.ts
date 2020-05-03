import {CampaignState} from './campaignTypes';

interface AppState {
  campaignState: CampaignState;
}

export default ({campaignState}: AppState) => campaignState;
