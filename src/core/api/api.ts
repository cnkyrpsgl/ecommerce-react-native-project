import {call} from 'redux-saga/effects';
import constants from '../../common/constants/index';

export enum DataType {
  JSON,
  BLOB
}

// from lib.dom.d.ts
type BodyInit = Blob | FormData | URLSearchParams | string;

export const apiUrl = (restUrl: string, endpoint: string) =>
  `${restUrl}${endpoint}`;

function* api(
  method: string,
  partialUrl: string,
  data: unknown,
  headers = {},
  dataType = DataType.JSON
) {
  // TODO: Change rest url related to backend
  const restUrl = '';
  const url = apiUrl(restUrl, partialUrl);
  const fullHeaders =
    dataType === DataType.JSON
      ? {
          ...headers,
          'X-Device-Type': 'NORMAL',
          'Content-Type': 'application/json'
        }
      : {
          ...headers,
          'X-Device-Type': 'NORMAL'
        };
  const res = yield fetch(url, {
    method,
    headers: fullHeaders,
    body:
      dataType === DataType.JSON && data !== null && data !== undefined
        ? JSON.stringify(data)
        : (data as BodyInit | null)
  });
  if (!res.ok) {
    return {...res, errorDetail: res.statusText};
  }
  if (dataType === DataType.BLOB) {
    return res;
  }
  return yield res.json();
}

export function* getRequest(url: string, headers = {}, dataType?: DataType) {
  return yield call(api, 'get', url, null, headers, dataType);
}

export function* postRequest(
  url: string,
  data?: unknown,
  headers = {},
  dataType?: DataType
) {
  return yield call(api, 'post', url, data, headers, dataType);
}

export function* putRequest(
  url: string,
  data?: unknown,
  headers = {},
  dataType?: DataType
) {
  return yield call(api, 'put', url, data, headers, dataType);
}

export function* removeRequest(url: string, headers = {}, dataType?: DataType) {
  return yield call(api, 'delete', url, null, headers, dataType);
}

export function* downloadRequest(url: string, data?: unknown, headers = {}) {
  return yield call(api, 'post', url, data, headers, DataType.BLOB);
}

export const getErrorMessage = (response: any, message: string) =>
  response.errorCode === constants.ERRORCODE ? message : response.errorDetail;
