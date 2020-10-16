import React, { useContext } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
// files - components
import Header from '../components/Header';
import DealsSearch from '../components/Deals/DealsSearch';
import DealsLangkah from '../components/Deals/DealsLangkah';
import DealsCashback from '../components/Deals/DealsCashback';
import DealsKebahagiaan from '../components/Deals/DealsKebahagiaan';
import DealsList from '../components/Deals/DealsList';
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
        <ScrollView
          style={styles.scrollview}
          showsVerticalScrollIndicator={false}
        >
          {/* deals search */}
          <DealsSearch />

          {/* deals langkah */}
          <DealsLangkah />

          {/* deals cashback */}
          <DealsCashback />

          {/* deals kebahagiaan */}
          <DealsKebahagiaan />

          {/* deals list */}
          <DealsList />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {},
  scrollView: {},
});
