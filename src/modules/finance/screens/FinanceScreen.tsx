/* eslint-disable global-require */
import React from 'react';
import { StyleSheet, Image } from 'react-native';
// files
import Header from '../../shared/components/Header';
import { ThemedView } from '../../shared/components/Themed';
import MontserratText from '../../shared/components/MontserratText';
import Colors from '../../shared/constants/Colors';
import Dimension from '../../shared/constants/Dimensions';
import { ThemeContext } from '../../shared/contexts/ThemeContext';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimension.deviceHeight / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: Dimension.deviceHeight / 4,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    paddingTop: 20,
    paddingBottom: 5,
  },
  desc: {
    textAlign: 'center',
    paddingHorizontal: 20,
    color: Colors.grey,
  },
});

const FinanceScreen: React.FC = () => {
  const { isDarkMode } = React.useContext(ThemeContext);
  const backgroundColor = React.useMemo(
    () => (isDarkMode ? Colors.dark.background : Colors.light.background),
    [isDarkMode],
  );
  const color = React.useMemo(
    () => (isDarkMode ? Colors.dark.text : Colors.light.text),
    [isDarkMode],
  );

  return (
    <ThemedView
      style={{
        flex: 1,
        backgroundColor,
      }}>
      {/* header */}
      <Header backButton={false} title="Finance" />

      {/* content */}
      <ThemedView style={styles.container}>
        <Image
          style={styles.img}
          source={require('../../../../assets/maintenance.png')}
          resizeMode="contain"
        />

        <ThemedView style={styles.textContainer}>
          <MontserratText
            style={{
              ...styles.title,
              color,
            }}>
            Kita lagi nyiapin sesuatu
          </MontserratText>

          <MontserratText style={styles.desc}>
            Sabar ya, semua biar kamu bisa nikmatin berbagai layanan terbaik di
            OVO
          </MontserratText>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

export default FinanceScreen;
