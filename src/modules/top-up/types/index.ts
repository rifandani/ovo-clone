import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationState, SceneRendererProps } from 'react-native-tab-view';
import { HomeStackParamList } from '../../home/types';

export type TopUpScreenNavigationProp = NativeStackScreenProps<
  HomeStackParamList,
  'TopUp'
>;

export type TopUpScreenRouteProp = RouteProp<HomeStackParamList, 'TopUp'>;

/* ---------------------------------- tab-view di top-up screen --------------------------------- */

export type RenderTabBarProps = SceneRendererProps & {
  navigationState: NavigationState<Route>;
};

export type Route = {
  key: string;
  title: string;
};

/* ----------------------------------------- InstanTopUp ---------------------------------------- */

export type InstanTopUpUseNavigation = TopUpScreenNavigationProp['navigation'];
