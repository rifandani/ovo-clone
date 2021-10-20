import { ColorSchemeName } from 'react-native';
import { NavigatorScreenParams } from '@react-navigation/native';
// files
import { HomeStackParamList } from '../modules/home/types';

export type RootNavigationProps = {
  colorScheme: ColorSchemeName;
};

export type RootStackParamList = {
  Intro: undefined;
  AppTab: undefined; // bottom-tab
  NotFound: undefined;
};

export type BottomTabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>; // native-stack
  Deals: undefined;
  Scan: undefined;
  Finance: undefined;
  Profile: undefined;
};
