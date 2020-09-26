import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import 'react-native-gesture-handler';
// files - components
import IntroScreen from './screens/IntroScreen';
// import WelcomeScreen from './screens/WelcomeScreen';
import FinanceTabScreen from './screens/FinanceTabScreen';
import { ThemeProvider } from './contexts/ThemeContext';

const AppStack = createStackNavigator();

// Before rendering any navigation stack => Optimize memory usage and performance
import { enableScreens } from 'react-native-screens';
enableScreens();

export default function App() {
  return (
    <ThemeProvider>
      <PaperProvider>
        <NavigationContainer>
          <AppStack.Navigator initialRouteName="Intro" headerMode="none">
            <AppStack.Screen name="Intro" component={IntroScreen} />
            {/* <AppStack.Screen name="Welcome" component={WelcomeScreen} /> */}
            <AppStack.Screen name="Finance" component={FinanceTabScreen} />
          </AppStack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </ThemeProvider>
  );
}
