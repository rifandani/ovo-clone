import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
import { useAsyncStorage } from '@react-native-community/async-storage';

import Colors from '../../constants/Colors';
import { deviceHeight } from '../../constants/Dimensions';
import { ThemeContext } from '../../contexts/ThemeContext';

const gradients = [
  Colors.grey,
  Colors.light,
  Colors.light,
  Colors.light,
  Colors.grey,
];

const firstRowData = [
  {
    iconName: 'thunder-cloud',
    iconColor: 'orange',
    text: 'PLN',
    price: '250000',
  },
  {
    iconName: 'credit',
    iconColor: '#0077b6',
    text: 'Pulsa',
    price: '100000',
  },
  {
    iconName: 'globe',
    iconColor: '#2a9d8f',
    text: 'Data',
    price: '75000',
  },
  {
    iconName: 'water',
    iconColor: '#4ea8de',
    text: 'PDAM',
    price: '200000',
  },
];

const secondRowData = [
  {
    iconName: 'shield',
    iconColor: '#06d6a0',
    text: 'BPJS',
    price: '50000',
  },
  {
    iconName: 'tv',
    iconColor: '#ee6c4d',
    text: 'TV',
    price: '330000',
  },
  {
    iconName: 'phone',
    iconColor: '#fcbf49',
    text: 'Telkom',
    price: '175000',
  },
  {
    iconName: 'list',
    iconColor: Colors.primary,
    text: 'Lainnya',
    price: '0',
  },
];

const HomeService = () => {
  const { isDarkMode, updateCashContext } = useContext(ThemeContext);

  const { getItem, setItem } = useAsyncStorage('cash');

  const writeItemToStorage = async (price) => {
    try {
      if (price < 0.1) {
        return;
      }

      // get current cash from storage
      const storageCash = await getItem();
      const currentCashNumber = Number(storageCash); // number

      // new cash
      const newCash = currentCashNumber - Number(price); // number

      // check if cash is enough to pay the bills
      if (currentCashNumber < Number(price)) {
        return Alert.alert(
          'Pembayaran gagal',
          `Cash anda kurang dari ${price}. Silahkan Top Up terlebih dahulu.`,
        );
      } else {
        // update cash
        await setItem(newCash.toString());
        updateCashContext();
        Alert.alert('Pembayaran berhasil', 'Terimakasih telah bertransaksi');
      }
    } catch (err) {
      Alert.alert('Pembayaran gagal', 'Sistem error, coba lagi nanti.');
    }
  };

  return (
    <View style={styles.serviceContainer}>
      {/* first row */}
      <View style={styles.serviceFirstRow}>
        {firstRowData.map((el, i) => (
          <TouchableOpacity
            style={styles.serviceItem}
            key={i}
            onPress={() => writeItemToStorage(el.price)}
          >
            <LinearGradient style={styles.serviceLogo} colors={gradients}>
              <Entypo name={el.iconName} size={24} color={el.iconColor} />
            </LinearGradient>
            <Text style={{ color: isDarkMode ? Colors.light : Colors.dark }}>
              {el.text}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* second row */}
      <View style={styles.serviceSecondRow}>
        {secondRowData.map((el, i) => (
          <TouchableOpacity
            style={styles.serviceItem}
            key={i}
            onPress={() => writeItemToStorage(el.price)}
          >
            <LinearGradient style={styles.serviceLogo} colors={gradients}>
              <Entypo name={el.iconName} size={24} color={el.iconColor} />
            </LinearGradient>
            <Text style={{ color: isDarkMode ? Colors.light : Colors.dark }}>
              {el.text}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default HomeService;

const styles = StyleSheet.create({
  serviceContainer: {
    height: deviceHeight / 3,
    padding: 20,
    paddingTop: 10,
  },
  serviceFirstRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  serviceSecondRow: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  serviceItem: {
    alignItems: 'center',
    padding: 10,
  },
  serviceLogo: {
    borderRadius: 9999,
    padding: 5,
    marginBottom: 5,
  },
});
