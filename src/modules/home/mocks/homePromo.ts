import { PromoData } from '../types/mocks';

/* eslint-disable global-require */
export const promoData: PromoData[] = [
  {
    id: Math.random().toString().substr(2, 15),
    imgSource: require('../../../../assets/promo1.png'),
  },
  {
    id: Math.random().toString().substr(2, 15),
    imgSource: require('../../../../assets/promo2.png'),
  },
  {
    id: Math.random().toString().substr(2, 15),
    imgSource: require('../../../../assets/promo3.png'),
  },
];

export const emptyText = '';
