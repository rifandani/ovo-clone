import React, { useContext } from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
// files - components
import Header from '../components/Header';
import Colors from '../constants/Colors';
import { ThemeContext } from '../contexts/ThemeContext';

export default function DealsScreen({ navigator }) {
  const { isDarkMode } = useContext(ThemeContext);
  const { navigate } = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDarkMode ? Colors.dark : Colors.light,
      }}
    >
      <StatusBar style="light" />

      {/* header */}
      <Header title="Deals" />

      {/* content */}
      <View style={styles.content}>
        <ScrollView style={styles.scrollview}>
          <TouchableOpacity onPress={() => navigate('Home')}>
            <Text>To Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('Scan')}>
            <Text>To Scan</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('Finance')}>
            <Text>To Finance</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('Profile')}>
            <Text>To Profile</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {},
  scrollView: {
    padding: 100,
  },
});
