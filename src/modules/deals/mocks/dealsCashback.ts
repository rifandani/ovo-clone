/* eslint-disable global-require */
import Colors from '../../shared/constants/Colors';
import { CashbackCarouselData } from '../types/mocks';

export const cashbackCarouselData: CashbackCarouselData[] = [
  {
    key: Math.random().toString().substr(2, 15),
    source: require('../../../../assets/gear.png'),
    sourceBgColor: Colors.warning,
  },
  {
    key: Math.random().toString().substr(2, 15),
    source: require('../../../../assets/arrow.png'),
    sourceBgColor: Colors.success,
  },
  {
    key: Math.random().toString().substr(2, 15),
    source: require('../../../../assets/chart.png'),
    sourceBgColor: Colors.secondary,
  },
];

export const emptyText = '';
