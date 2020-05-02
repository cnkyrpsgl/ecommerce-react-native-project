export const profileMenuData = [
  {title: 'Account', icon: 'settings', scene: 'Account'},
  {title: 'Addresses', icon: 'map-marker', scene: 'Address'},
  {title: 'Payments', icon: 'credit-card', scene: 'Payment'},
  {title: 'Orders', icon: 'history', scene: 'History'}
];

export const addressData = [
  {
    title: 'Home',
    detail:
      '1399 Pingree Ave, Lincoln Park, MI, 48146 askfnaskfnadkfnadkcvnadlkscmnaslkcmaslxmaslcxmaslcmaslcmsalcmlsamclasmc adlsamclasc sac ascaslc'
  },
  {
    title: 'Work',
    detail: '20 Medical St #APT A13, Altoona, AL, 35952'
  }
];

export const paymentData = [
  {
    cardName: 'American Express',
    cardNumber: '123456********78'
  }
];

export enum AddressType {
  home = 'Home',
  work = 'Work'
}

export const orderHistoryData = [
  {
    date: '26/02/2020 17:15',
    skuAmount: 16,
    cartPrice: 46.75,
    addressType: AddressType.home
  },
  {
    date: '03/03/2020 11:32',
    skuAmount: 12,
    cartPrice: 33.5,
    addressType: AddressType.work
  },
  {
    date: '15/04/2020 21:50',
    skuAmount: 21,
    cartPrice: 53.9,
    addressType: AddressType.home
  }
];
