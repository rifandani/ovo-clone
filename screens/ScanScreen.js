import React, { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
// files - components
import Colors from '../constants/Colors';
import { deviceHeight } from '../constants/Dimensions';
import { ThemeContext } from '../contexts/ThemeContext';
import Header from '../components/Header';
import ScanQR from '../components/ScanQR';

export default function ScanScreen({ navigator }) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDarkMode ? Colors.dark : Colors.light,
      }}
    >
      <StatusBar style="light" />

      {/* header */}
      <Header title="Scan" />

      {/* scanner */}
      <ScanQR />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {},
  scrollView: {},
});
