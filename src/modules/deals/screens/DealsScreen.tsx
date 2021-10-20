import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
// files
import Header from '../../shared/components/Header';
import DealsSearch from '../components/DealsSearch';
import DealsLangkah from '../components/DealsLangkah';
import DealsCashback from '../components/DealsCashback';
import DealsKebahagiaan from '../components/DealsKebahagiaan';
import DealsList from '../components/DealsList';
import { ThemedView } from '../../shared/components/Themed';
import Colors from '../../shared/constants/Colors';
import { ThemeContext } from '../../shared/contexts/ThemeContext';
import { DealsScreenNavigationProp } from '../types';

const styles = StyleSheet.create({
  content: {},
  scrollView: {},
});

const DealsScreen: React.FC<DealsScreenNavigationProp> = () => {
  const { isDarkMode } = React.useContext(ThemeContext);

  return (
    <ThemedView
      style={{
        flex: 1,
        backgroundColor: isDarkMode ? Colors.dark.text : Colors.light.text,
      }}>
      {/* header */}
      <Header backButton={false} title="Deals" />

      {/* content */}
      <ThemedView style={styles.content}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
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
      </ThemedView>
    </ThemedView>
  );
};

export default DealsScreen;
