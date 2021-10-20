/* eslint-disable camelcase */
import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import 'react-native-gesture-handler';
// files
import {
  ThemeContext,
  ThemeProvider,
} from './src/modules/shared/contexts/ThemeContext';
import RootNavigation from './src/navigation';
// import useColorScheme from './src/modules/shared/hooks/useColorScheme';

const App: React.FC = () => {
  // navigation theme
  // const colorScheme = useColorScheme(); // ini dari OS setting preference
  const { isDarkMode } = React.useContext(ThemeContext);

  // custom font
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <PaperProvider>
      <ThemeProvider>
        <SafeAreaProvider>
          <RootNavigation colorScheme={isDarkMode ? 'dark' : 'light'} />
          {/* eslint-disable-next-line react/style-prop-object */}
          <StatusBar style="auto" />
        </SafeAreaProvider>
      </ThemeProvider>
    </PaperProvider>
  );
};

export default App;
