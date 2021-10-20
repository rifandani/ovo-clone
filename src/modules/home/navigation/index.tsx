import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// files
import HomeScreen from '../screens/HomeScreen';
import TopUpScreen from '../../top-up/screens/TopUpScreen';
import { HomeStackParamList } from '../types';

const AppStack = createNativeStackNavigator<HomeStackParamList>();

const HomeNavigation: React.FC = () => {
  return (
    <AppStack.Navigator initialRouteName="Home">
      <AppStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="TopUp"
        component={TopUpScreen}
        options={{ headerShown: false }}
      />
    </AppStack.Navigator>
  );
};

export default HomeNavigation;
