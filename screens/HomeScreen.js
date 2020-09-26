import React, { useContext } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
import { Card } from 'react-native-paper';
// files - components
import Header from '../components/Header';
import HomeCash from '../components/HomeCash';
import HomeTransfer from '../components/HomeTransfer';
import HomeService from '../components/HomeService';
import HomeMenarik from '../components/HomeMenarik';
import Colors from '../constants/Colors';
import { deviceHeight, deviceWidth } from '../constants/Dimensions';
import { ThemeContext } from '../contexts/ThemeContext';

export default function HomeScreen({ navigator }) {
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
      <Header title="OVO" />

      {/* content */}
      <View style={styles.content}>
        <ScrollView
          style={styles.scrollview}
          showsVerticalScrollIndicator={false}
        >
          {/* cash, points */}
          <HomeCash />

          {/* topup, transfer, history */}
          <HomeTransfer />

          {/* services */}
          <HomeService />

          {/* divider */}
          <View style={styles.divider}></View>

          {/* promo */}
          <View style={styles.promoContainer}>
            <View style={styles.promo}></View>
          </View>

          {/* divider */}
          <View style={styles.divider}></View>

          {/* menarik */}
          <HomeMenarik />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {},
  scrollView: {},
  divider: {
    height: 10,
    backgroundColor: '#e9ecef',
  },
  promoContainer: {
    height: deviceHeight / 2.9,
    padding: 20,
  },
  promo: {
    backgroundColor: 'cyan',
  },
});
