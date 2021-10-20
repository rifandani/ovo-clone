import React from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
// files
import { ThemedView } from '../../shared/components/Themed';
import MontserratText from '../../shared/components/MontserratText';
import Colors from '../../shared/constants/Colors';
import Dimension from '../../shared/constants/Dimensions';
import { InstanTopUpUseNavigation } from '../types';

const styles = StyleSheet.create({
  divider: {
    height: Dimension.deviceHeight / 70,
    backgroundColor: Colors.lightGrey,
  },
  cashContainer: {
    padding: 20,
    paddingTop: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10,
  },
  cashCard: {
    borderColor: Colors.lightGrey,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cashTextContainer: {
    marginLeft: 10,
  },
  nominalList: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  nominalButton: {
    padding: 7,
    paddingHorizontal: 10,
    borderWidth: 3,
    borderRadius: 50,
  },
  input: {
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  footer: {
    width: '100%',
    height: Dimension.deviceHeight / 8,
    padding: 10,
    justifyContent: 'center',
    borderTopWidth: 3,
    borderColor: Colors.lightGrey,
    backgroundColor: 'white',
  },
  footerButton: {
    padding: 15,
    borderRadius: 50,
  },
  footerText: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
  },
  debitCard: {
    height: Dimension.deviceHeight / 5.5,
    width: '70%',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: Colors.success,
    backgroundColor: Colors.lightGrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const InstanTopUp: React.FC = () => {
  const { navigate } = useNavigation<InstanTopUpUseNavigation>();
  // cash from storage
  const [cashItem, setCashItem] = React.useState<string>('');
  const { getItem, setItem } = useAsyncStorage('cash');
  // nominal selector
  const [selector, setSelector] = React.useState<number | null>(null);
  // text input
  const [cash, setCash] = React.useState<string>('');
  const [disableTopup, setDisableTopup] = React.useState<boolean>(true);
  const [showError, setShowError] = React.useState<boolean>(false);

  useFocusEffect(
    React.useCallback(() => {
      const readItemFromStorage = async () => {
        const item = await getItem();
        setCashItem(item || '0');
      };

      // Do something when the screen is focused
      readItemFromStorage();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  const onChangeText = (text: string) => {
    // validation
    if (!text) {
      setShowError(true);
      setDisableTopup(true);
      setCash('');

      // } else if (validator.isLength(text, { min: 1, max: 4 })) {
      //   setSelector(null);
      //   setShowError(true);
      //   setDisableTopup(true);
      //   setCash(text.replace(/[^0-9]/g, ''));
    } else {
      setSelector(null);
      setShowError(false);
      setDisableTopup(false);

      const result = text.replace(/[^0-9]/g, '');
      setCash(result);
    }
  };

  const onPressSelector = (amount: number) => {
    setSelector(amount);
    setDisableTopup(false);
    setShowError(false);
    setCash('');
  };

  const onTopup = async () => {
    try {
      // get current cash
      const currentCashNumber = Number(cashItem); // number

      // new cash
      const newCash = currentCashNumber + (selector || +cash); // number

      // update cash
      await setItem(newCash.toString());

      // after all done
      Alert.alert('Top Up Successful');
      navigate('Home');
    } catch (err) {
      console.error('Top Up Error', (err as Error).toString());
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      {/* ovo cash */}
      <ThemedView style={styles.cashContainer}>
        <MontserratText style={styles.title}>Top Up ke</MontserratText>

        <ThemedView style={styles.cashCard}>
          <MaterialCommunityIcons
            name="cash"
            size={40}
            color={Colors.primary}
          />

          <ThemedView style={styles.cashTextContainer}>
            <MontserratText style={{ fontWeight: 'bold' }}>
              OVO Cash
            </MontserratText>
            {cashItem !== '' && (
              <MontserratText>Balance Rp{cashItem}</MontserratText>
            )}
          </ThemedView>
        </ThemedView>
      </ThemedView>

      {/* divider */}
      <ThemedView style={styles.divider} />

      {/* nominal */}
      <ThemedView style={{ padding: 20 }}>
        <MontserratText style={styles.title}>
          Pilih Nominal Top Up
        </MontserratText>

        <ThemedView>
          <ThemedView style={styles.nominalList}>
            {/* 100 */}
            <TouchableOpacity
              style={{
                ...styles.nominalButton,
                borderColor:
                  selector === 100000 ? Colors.success : Colors.lightGrey,
              }}
              onPress={() => onPressSelector(100000)}>
              <MontserratText>Rp100.000</MontserratText>
            </TouchableOpacity>

            {/* 200 */}
            <TouchableOpacity
              style={{
                ...styles.nominalButton,
                borderColor:
                  selector === 200000 ? Colors.success : Colors.lightGrey,
              }}
              onPress={() => onPressSelector(200000)}>
              <MontserratText>Rp200.000</MontserratText>
            </TouchableOpacity>

            {/* 500 */}
            <TouchableOpacity
              style={{
                ...styles.nominalButton,
                borderColor:
                  selector === 500000 ? Colors.success : Colors.lightGrey,
              }}
              onPress={() => onPressSelector(500000)}>
              <MontserratText>Rp500.000</MontserratText>
            </TouchableOpacity>
          </ThemedView>

          <MontserratText style={{ marginTop: 10, color: Colors.grey }}>
            Atau masukan nominal top up di sini
          </MontserratText>

          <TextInput
            style={{
              ...styles.input,
              backgroundColor: showError ? '#ba181b' : '#f7f7f7',
              color: showError ? 'white' : 'black',
            }}
            onChangeText={onChangeText}
            value={cash}
            // onFocus={onFocus}
            placeholder="Minimal Rp10.000"
            keyboardType="number-pad"
            maxLength={7}
          />

          <MontserratText
            style={{
              color: showError ? Colors.danger : 'white',
              paddingLeft: 20,
              fontSize: 12,
            }}>
            Minimal Top Up Rp10,000
          </MontserratText>
        </ThemedView>
      </ThemedView>

      {/* divider */}
      <ThemedView style={styles.divider} />

      {/* kartu debit */}
      <ThemedView style={{ padding: 20 }}>
        <MontserratText style={styles.title}>Kartu Debit</MontserratText>

        <ThemedView
          style={{ width: '100%', height: Dimension.deviceHeight / 4.2 }}>
          <ThemedView style={styles.debitCard}>
            <MaterialCommunityIcons
              name="credit-card-plus-outline"
              size={40}
              color={Colors.success}
            />

            <MontserratText style={{ color: Colors.grey }}>
              Tambah Kartu Debit BCA
            </MontserratText>
          </ThemedView>
        </ThemedView>
      </ThemedView>

      {/* footer */}
      <ThemedView style={styles.footer}>
        <TouchableOpacity
          style={{
            ...styles.footerButton,
            backgroundColor: disableTopup ? Colors.grey : Colors.primary,
          }}
          onPress={onTopup}
          disabled={disableTopup}>
          <MontserratText style={styles.footerText}>
            Top Up Sekarang
          </MontserratText>
        </TouchableOpacity>
      </ThemedView>
    </ScrollView>
  );
};

export default InstanTopUp;
