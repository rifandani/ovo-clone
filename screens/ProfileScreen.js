import React, { useContext } from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
// files - components
import Header from '../components/Header';
import Colors from '../constants/Colors';
import { ThemeContext } from '../contexts/ThemeContext';

export default function ProfileScreen({ navigator }) {
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
      <Header title="Profile" />

      {/* content */}
      <View style={styles.content}>
        <ScrollView style={styles.scrollview}>
          <TouchableOpacity onPress={() => navigate('Home')}>
            <Text>To Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('Deals')}>
            <Text>To Deals</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('Scan')}>
            <Text>To Scan</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('Finance')}>
            <Text>To Finance</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {},
  scrollView: {
    padding: 10,
  },
});
