import Colors from '../../shared/constants/Colors';
import { FirstRowData, SecondRowData } from '../types/mocks';

export const gradients: string[] = [
  Colors.grey,
  Colors.light.text,
  Colors.light.text,
  Colors.light.text,
  Colors.grey,
];

export const firstRowData: FirstRowData[] = [
  {
    iconName: 'thunder-cloud',
    iconColor: Colors.pink,
    text: 'PLN',
    price: '250000',
  },
  {
    iconName: 'credit',
    iconColor: '#0077b6',
    text: 'Pulsa',
    price: '100000',
  },
  {
    iconName: 'globe',
    iconColor: '#2a9d8f',
    text: 'Data',
    price: '75000',
  },
  {
    iconName: 'water',
    iconColor: '#4ea8de',
    text: 'PDAM',
    price: '200000',
  },
];

export const secondRowData: SecondRowData[] = [
  {
    iconName: 'shield',
    iconColor: '#06d6a0',
    text: 'BPJS',
    price: '50000',
  },
  {
    iconName: 'tv',
    iconColor: '#ee6c4d',
    text: 'TV',
    price: '330000',
  },
  {
    iconName: 'phone',
    iconColor: '#fcbf49',
    text: 'Telkom',
    price: '175000',
  },
  {
    iconName: 'list',
    iconColor: Colors.primary,
    text: 'Lainnya',
    price: '0',
  },
];
