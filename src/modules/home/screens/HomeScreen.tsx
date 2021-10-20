import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
// files
import { MyThemedView } from '../../shared/components/MyThemed';
import HomeCash from '../components/HomeCash';
import HomeTransfer from '../components/HomeTransfer';
import HomeService from '../components/HomeService';
import HomePromo from '../components/HomePromo';
import HomeMenarik from '../components/HomeMenarik';
import HomeModal from '../components/HomeModal';
import { HomeScreenNavigationProp } from '../types';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  content: {},
  scrollView: {},
  divider: {
    height: 10,
    backgroundColor: '#e9ecef',
  },
});

const HomeScreen: React.FC<HomeScreenNavigationProp> = () => {
  // hooks
  const [renderModal, setRenderModal] = React.useState<boolean>(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setRenderModal(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <MyThemedView style={styles.rootContainer}>
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style="light" />

      {/* content */}
      <MyThemedView style={styles.content}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          {/* cash, points */}
          <HomeCash />

          {/* topup, transfer, history */}
          <HomeTransfer />

          {/* services */}
          <HomeService />

          {/* divider */}
          <MyThemedView style={styles.divider} />

          {/* promo */}
          <HomePromo />

          {/* divider */}
          <MyThemedView style={styles.divider} />

          {/* menarik */}
          <HomeMenarik />
        </ScrollView>
      </MyThemedView>

      {/* ad modal */}
      {renderModal && <HomeModal />}
    </MyThemedView>
  );
};

export default HomeScreen;
