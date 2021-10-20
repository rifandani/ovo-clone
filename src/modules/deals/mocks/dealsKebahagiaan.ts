/* eslint-disable global-require */
import Colors from '../../shared/constants/Colors';
import { CarouselData } from '../types/mocks';

export const carouselData: CarouselData[] = [
  {
    key: Math.random().toString().substr(2, 15),
    source: require('../../../../assets/hotdog.png'),
    sourceBgColor: Colors.info,
    title: 'Voucher 100.000',
    subtitle: 'McDonalds',
    desc: 'Tersedia 3418 vouchers',
    price: '60.000',
  },
  {
    key: Math.random().toString().substr(2, 15),
    source: require('../../../../assets/burger.png'),
    sourceBgColor: Colors.secondary,
    title: 'Discount 40%',
    subtitle: 'Burger King',
    desc: 'Tersedia 19590 vouchers',
    price: '75.000',
  },
  {
    key: Math.random().toString().substr(2, 15),
    source: require('../../../../assets/pizza.png'),
    sourceBgColor: Colors.success,
    title: 'Promo Paket Rendang',
    subtitle: 'Pizza Hut Delivery',
    desc: 'Tersedia 1185 vouchers',
    price: '95.000',
  },
];

export const emptyText = '';
