import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
// files
import { BottomTabParamList } from '../../../navigation/types';

export type DealsScreenNavigationProp = NativeStackScreenProps<
  BottomTabParamList,
  'Deals'
>;

export type DealsScreenRouteProp = RouteProp<BottomTabParamList, 'Deals'>;
