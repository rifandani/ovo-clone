import Colors from '../../shared/constants/Colors';
import { FlatListData } from '../types/mocks';

export const flatListData: FlatListData[] = [
  {
    key: '1',
    iconName: 'credit-card-outline',
    text: 'Kartu Debit',
    iconColor: Colors.success,
  },
  {
    key: '2',
    iconName: 'atm',
    text: 'ATM',
    iconColor: Colors.success,
  },
  {
    key: '3',
    iconName: 'cellphone',
    text: 'Internet / Mobile banking',
    iconColor: Colors.success,
  },
  {
    key: '4',
    iconName: 'bank',
    text: 'OVO Booth',
    iconColor: Colors.primary,
  },
  {
    key: '5',
    iconName: 'motorbike',
    text: 'Grab',
    iconColor: Colors.green,
  },
  {
    key: '6',
    iconName: 'shopping',
    text: 'Tokopedia',
    iconColor: Colors.lightGreen,
  },
];

export const emptyText = '';
