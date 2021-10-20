import React from 'react';
import { StyleSheet } from 'react-native';
// files
import Header from '../../shared/components/Header';
import ScanQR from '../components/ScanQR';
import { ThemedView } from '../../shared/components/Themed';
import Colors from '../../shared/constants/Colors';
import { ThemeContext } from '../../shared/contexts/ThemeContext';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});

const ScanScreen: React.FC = () => {
  // hooks
  const { isDarkMode } = React.useContext(ThemeContext);
  const backgroundColor = React.useMemo(
    () => (isDarkMode ? Colors.dark.background : Colors.light.background),
    [isDarkMode],
  );

  return (
    <ThemedView
      style={{
        ...styles.rootContainer,
        backgroundColor,
      }}>
      {/* header */}
      <Header backButton={false} title="Scan" />

      {/* scanner */}
      <ScanQR />
    </ThemedView>
  );
};

export default ScanScreen;
