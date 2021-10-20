/* eslint-disable global-require */
// import savingsImg from '../../../../assets/savings.png';
// import homeImg from '../../../../assets/homeImg.png';
// import paymentsImg from '../../../../assets/payments.png';

import { Slide } from '../types';

export const slides: Slide[] = [
  {
    key: 'one',
    title: 'Record',
    text: 'Record all your\nincome and expenses',
    image: require('../../../../assets/savings.png'),
  },
  {
    key: 'two',
    title: 'Track',
    text: 'Track all your\nbusiness transactions',
    image: require('../../../../assets/homeImg.png'),
  },
  {
    key: 'three',
    title: 'Report',
    text: 'Make a report\nbased on your transactions',
    image: require('../../../../assets/payments.png'),
  },
];

export const emptyArr = [];
