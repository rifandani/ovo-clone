import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
// files
import { BottomTabParamList } from '../../../navigation/types';

export type HomeStackParamList = {
  Home: undefined;
  TopUp: undefined;
};

export type HomeScreenNavigationProp = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParamList, 'Home'>,
  NativeStackScreenProps<HomeStackParamList>
>;

export type HomeScreenUseNavigation = HomeScreenNavigationProp['navigation'];
