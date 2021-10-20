import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
// files
import { RootStackParamList } from '../../../navigation/types';

export type NotFoundScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'App'
>;

export type NotFoundScreenRouteProp = RouteProp<RootStackParamList, 'App'>;
