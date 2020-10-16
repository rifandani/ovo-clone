import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Header from '../components/Header';
import HomeCash from '../components/Home/HomeCash';
import HomeTransfer from '../components/Home/HomeTransfer';
import HomeService from '../components/Home/HomeService';
import HomePromo from '../components/Home/HomePromo';
import HomeMenarik from '../components/Home/HomeMenarik';
import HomeModal from '../components/Home/HomeModal';
import Colors from '../constants/Colors';
import { ThemeContext } from '../contexts/ThemeContext';

export default function HomeScreen() {
  const { isDarkMode } = useContext(ThemeContext);

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
        </ScrollView>

        {/* ad modal */}
        {renderModal && <HomeModal />}
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
