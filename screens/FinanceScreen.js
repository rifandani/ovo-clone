import React, { useContext } from 'react';
import { StyleSheet, View, Text, Image, StatusBar } from 'react-native';
// files - components
import Header from '../components/Header';
import Colors from '../constants/Colors';
import { deviceHeight } from '../constants/Dimensions';
import { Regular, Bold } from '../constants/Fonts';
import { ThemeContext } from '../contexts/ThemeContext';

export default function FinanceScreen({ navigator }) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDarkMode ? Colors.dark : Colors.light,
      }}
    >
      <StatusBar barStyle="light-content" />

      {/* header */}
      <Header title="Finance" />

      {/* content */}
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={require('../assets/maintenance.png')}
          resizeMode="contain"
        />

        <View style={styles.textContainer}>
          <Text
            style={{
              ...styles.title,
              color: isDarkMode ? Colors.light : Colors.dark,
            }}
          >
            Kita lagi nyiapin sesuatu
          </Text>
          <Text style={styles.desc}>
            Sabar ya, semua biar kamu bisa nikmatin berbagai layanan terbaik di
            OVO
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: deviceHeight / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: deviceHeight / 4,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontFamily: Bold,
    fontSize: 16,
    paddingTop: 20,
    paddingBottom: 5,
  },
  desc: {
    textAlign: 'center',
    fontFamily: Regular,
    paddingHorizontal: 20,
    color: Colors.grey,
  },
});
