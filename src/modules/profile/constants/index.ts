import {AddressType} from '../../../core/address/stores/addressTypes';

export const profileMenuData = [
  {title: 'Account', icon: 'settings', scene: 'Account'},
  {title: 'Addresses', icon: 'map-marker', scene: 'Address'},
  {title: 'Payments', icon: 'credit-card', scene: 'Payment'},
  {title: 'Orders', icon: 'history', scene: 'History'}
];

export const addressData = {
  1: {
    title: 'House',
    detail:
      '1399 Pingree Ave, Lincoln Park, MI, 48146 askfnaskfnadkfnadkcvnadlkscmnaslkcmaslxmaslcxmaslcmaslcmsalcmlsamclasmc adlsamclasc sac ascaslc'
  },
  2: {
    title: 'Work',
    detail: '20 Medical St #APT A13, Altoona, AL, 35952'
  }
};

export const paymentData = {
  12345: {
    cardName: 'American Express',
    cardNumber: '123456********78',
    ownerName: 'Jeff Bezos',
    month: 12,
    year: 2025
  }
};

export const orderHistoryData = {
  423453: {
    date: '26/02/2020 17:15',
    skuAmount: 16,
    cartPrice: 46.75,
    addressType: AddressType.home
  },
  254654: {
    date: '03/03/2020 11:32',
    skuAmount: 12,
    cartPrice: 33.5,
    addressType: AddressType.work
  },
  334534: {
    date: '15/04/2020 21:50',
    skuAmount: 21,
    cartPrice: 53.9,
    addressType: AddressType.home
  }
};
