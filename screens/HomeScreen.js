import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
// files - components
import Header from '../components/Header';
import HomeCash from '../components/HomeCash';
import HomeTransfer from '../components/HomeTransfer';
import HomeService from '../components/HomeService';
import HomePromo from '../components/HomePromo';
import HomeMenarik from '../components/HomeMenarik';
import HomeModal from '../components/HomeModal';
import Colors from '../constants/Colors';
import { ThemeContext } from '../contexts/ThemeContext';

export default function HomeScreen({ navigator }) {
  const { isDarkMode } = useContext(ThemeContext);
  const { navigate } = useNavigation();

  const [renderModal, setRenderModal] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => {
      setRenderModal(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDarkMode ? Colors.dark : 'white',
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
          <HomePromo />

          {/* divider */}
          <View style={styles.divider}></View>

          {/* menarik */}
          <HomeMenarik />

          {/* ad modal */}
          {renderModal && <HomeModal />}
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
});
