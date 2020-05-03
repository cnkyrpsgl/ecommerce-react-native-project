import {takeLatest, put, call} from 'redux-saga/effects';
import {getErrorMessage, getRequest} from '../../api/api';
import {SagaIterator} from 'redux-saga';
import campaignActions from './campaignActions';

function* getCampaigns(): SagaIterator {
  // TODO: Change url related to backend
  const response = yield call(getRequest, 'url');
  return yield put(
    response.successful
      ? campaignActions.successGetCampaigns(response.data)
      : campaignActions.errorGetCampaigns(
          getErrorMessage(response, 'İstenilen kampanya bilgisi bulunamadı.')
        )
  );
}

function* onGetCampaigns() {
  yield takeLatest(campaignActions.requestGetCampaigns.type, getCampaigns);
}

function* getBanners(): SagaIterator {
  // TODO: Change url related to backend
  const response = yield call(getRequest, 'url');
  return yield put(
    response.successful
      ? campaignActions.successGetBanners(response.data)
      : campaignActions.errorGetBanners(
          getErrorMessage(response, 'İstenilen banner bilgisi bulunamadı.')
        )
  );
}

function* onGetBanners() {
  yield takeLatest(campaignActions.requestGetBanners.type, getBanners);
}

export default [onGetCampaigns, onGetBanners];
