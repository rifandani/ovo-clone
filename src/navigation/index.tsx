import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
// files
import IntroScreen from '../modules/intro/screens/IntroScreen';
import AppTab from '../navigation/AppTab';
import NotFoundScreen from '../modules/not-found/screens/NotFound';
import { RootNavigationProps, RootStackParamList } from './types';
import { MyDarkTheme, MyLightTheme } from '../modules/shared/constants/MyTheme';

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const RootNavigation: React.FC<RootNavigationProps> = ({ colorScheme }) => {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? MyDarkTheme : MyLightTheme}>
      <Navigator initialRouteName="Intro">
        <Screen
          name="Intro"
          component={IntroScreen}
          options={{ headerShown: false }}
        />
        <Screen
          name="AppTab"
          component={AppTab}
          options={{ headerShown: false }}
        />
        <Screen
          name="NotFound"
          component={NotFoundScreen}
          options={{ title: 'Oops!' }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
