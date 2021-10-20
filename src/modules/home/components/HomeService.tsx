import React from 'react';
import { StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
// files
import { ThemedView } from '../../shared/components/Themed';
import MontserratText from '../../shared/components/MontserratText';
import Colors from '../../shared/constants/Colors';
import { ThemeContext } from '../../shared/contexts/ThemeContext';
import { firstRowData, secondRowData } from '../mocks/homeService';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 15,
  },
  rowContainer: {
    // backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemBtn: {
    // backgroundColor: 'green',
    width: 75,
    alignItems: 'center',
    padding: 10,
  },
  itemLogo: {
    borderRadius: 9999,
    padding: 5,
    marginBottom: 5,
  },
});

const HomeService: React.FC = () => {
  // hooks
  const { isDarkMode, updateCashContext } = React.useContext(ThemeContext);
  const { getItem, setItem } = useAsyncStorage('cash');
  const backgroundColor = React.useMemo(
    () => (isDarkMode ? Colors.dark.background : Colors.light.background),
    [isDarkMode],
  );
  const color = React.useMemo(
    () => (isDarkMode ? Colors.dark.text : Colors.light.text),
    [isDarkMode],
  );

  const writeItemToStorage = async (price: string) => {
    try {
      if (+price < 0.1) {
        return;
      }

      // get current cash from storage
      const storageCash = (await getItem()) || '0'; // storage possibly null
      const currentCashNumber = +storageCash; // number

      // new cash
      const newCash = currentCashNumber - Number(price); // number

      // check if cash is enough to pay the bills
      if (currentCashNumber < +price) {
        Alert.alert(
          'Pembayaran gagal',
          `Cash anda kurang dari ${price}. Silahkan Top Up terlebih dahulu.`,
        );
        return;
      }
      // update cash
      await setItem(newCash.toString());
      updateCashContext();
      Alert.alert('Pembayaran berhasil', 'Terimakasih telah bertransaksi');
    } catch (err) {
      Alert.alert('Pembayaran gagal', 'Sistem error, coba lagi nanti.');
    }
  };

  return (
    <ThemedView style={{ ...styles.rootContainer, backgroundColor }}>
      {/* first row */}
      <ThemedView style={styles.rowContainer}>
        {firstRowData.concat(secondRowData).map(el => (
          <TouchableOpacity
            key={el.text}
            style={styles.itemBtn}
            onPress={() => writeItemToStorage(el.price)}>
            <ThemedView style={styles.itemLogo}>
              <Entypo name={el.iconName} size={24} color={el.iconColor} />
            </ThemedView>

            <MontserratText style={{ color }}>{el.text}</MontserratText>
          </TouchableOpacity>
        ))}
      </ThemedView>
    </ThemedView>
  );
};

export default HomeService;
