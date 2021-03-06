import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import 'react-native-gesture-handler';
import { AppLoading } from 'expo';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

import AppTab from './tabs/AppTab';
import IntroScreen from './screens/IntroScreen';
import TopUpScreen from './screens/TopUpScreen';
import { ThemeProvider } from './contexts/ThemeContext';

// Before rendering any navigation stack => Optimize memory usage and performance
import { enableScreens } from 'react-native-screens';
enableScreens();

const AppStack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <ThemeProvider>
      <PaperProvider>
        <NavigationContainer>
          <AppStack.Navigator initialRouteName="Intro" headerMode="none">
            {/* <AppStack.Screen name="Welcome" component={WelcomeScreen} /> */}
            <AppStack.Screen name="Intro" component={IntroScreen} />
            <AppStack.Screen name="App" component={AppTab} />
            <AppStack.Screen name="TopUp" component={TopUpScreen} />
          </AppStack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </ThemeProvider>
  );
}
