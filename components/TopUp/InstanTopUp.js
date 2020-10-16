import React, { useState, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import validator from 'validator';
import { useAsyncStorage } from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
// files
import Colors from '../../constants/Colors';
import { Bold } from '../../constants/Fonts';
import { deviceHeight } from '../../constants/Dimensions';

const InstanTopUp = () => {
  const { navigate } = useNavigation();

  // cash from storage
  const [cashItem, setCashItem] = useState('');
  const { getItem, setItem } = useAsyncStorage('cash');
  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused
      readItemFromStorage();
    }, []),
  );

  const readItemFromStorage = async () => {
    const item = await getItem();
    setCashItem(item);
  };

  // nominal selector
  const [selector, setSelector] = useState(null);
  // text input
  const [cash, setCash] = useState('');
  const [disableTopup, setDisableTopup] = useState(true);
  const [showError, setShowError] = useState(false);

  function onChangeText(text) {
    // validation
    if (!text) {
      setShowError(true);
      setDisableTopup(true);
      setCash('');
    } else if (validator.isLength(text, { min: 1, max: 4 })) {
      setSelector(null);
      setShowError(true);
      setDisableTopup(true);
      setCash(text.replace(/[^0-9]/g, ''));
    } else {
      setSelector(null);
      setShowError(false);
      setDisableTopup(false);

      const result = text.replace(/[^0-9]/g, '');
      setCash(result);
    }
  }

  function onPressSelector(amount) {
    setSelector(amount);
    setDisableTopup(false);
    setShowError(false);
    setCash('');
  }

  async function onTopup() {
    try {
      // get current cash
      const currentCashNumber = Number(cashItem); // number

      // new cash
      const newCash = currentCashNumber + (Number(cash) || selector); // number

      // update cash
      await setItem(newCash.toString());

      // after all done
      Alert.alert('Top Up Successful');
      navigate('Home');
    } catch (err) {
      Alert.alert('Top Up Error', err);
    }
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      {/* ovo cash */}
      <View style={styles.cashContainer}>
        <Text style={styles.title}>Top Up ke</Text>

        <View style={styles.cashCard}>
          <MaterialCommunityIcons
            name="cash"
            size={40}
            color={Colors.primary}
          />

          <View style={styles.cashTextContainer}>
            <Text style={{ fontWeight: 'bold' }}>OVO Cash</Text>
            {cashItem !== '' && <Text>Balance Rp{cashItem}</Text>}
          </View>
        </View>
      </View>

      {/* divider */}
      <View style={styles.divider} />

      {/* nominal */}
      <View style={{ padding: 20 }}>
        <Text style={styles.title}>Pilih Nominal Top Up</Text>

        <View>
          <View style={styles.nominalList}>
            {/* 100 */}
            <TouchableOpacity
              style={{
                ...styles.nominalButton,
                borderColor:
                  selector === 100000 ? Colors.success : Colors.lightGrey,
              }}
              onPress={() => onPressSelector(100000)}
            >
              <Text>Rp100.000</Text>
            </TouchableOpacity>

            {/* 200 */}
            <TouchableOpacity
              style={{
                ...styles.nominalButton,
                borderColor:
                  selector === 200000 ? Colors.success : Colors.lightGrey,
              }}
              onPress={() => onPressSelector(200000)}
            >
              <Text>Rp200.000</Text>
            </TouchableOpacity>

            {/* 500 */}
            <TouchableOpacity
              style={{
                ...styles.nominalButton,
                borderColor:
                  selector === 500000 ? Colors.success : Colors.lightGrey,
              }}
              onPress={() => onPressSelector(500000)}
            >
              <Text>Rp500.000</Text>
            </TouchableOpacity>
          </View>

          <Text style={{ marginTop: 10, color: Colors.grey }}>
            Atau masukan nominal top up di sini
          </Text>

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

          <Text
            style={{
              color: showError ? Colors.danger : 'white',
              paddingLeft: 20,
              fontSize: 12,
            }}
          >
            Minimal Top Up Rp10,000
          </Text>
        </View>
      </View>

      {/* divider */}
      <View style={styles.divider} />

      {/* kartu debit */}
      <View style={{ padding: 20 }}>
        <Text style={styles.title}>Kartu Debit</Text>

        <View style={{ width: '100%', height: deviceHeight / 4.2 }}>
          <View style={styles.debitCard}>
            <MaterialCommunityIcons
              name="credit-card-plus-outline"
              size={40}
              color={Colors.success}
            />

            <Text style={{ color: Colors.grey }}>Tambah Kartu Debit BCA</Text>
          </View>
        </View>
      </View>

      {/* footer */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={{
            ...styles.footerButton,
            backgroundColor: disableTopup ? Colors.grey : Colors.primary,
          }}
          onPress={onTopup}
          disabled={disableTopup}
        >
          <Text style={styles.footerText}>Top Up Sekarang</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default InstanTopUp;

const styles = StyleSheet.create({
  divider: {
    height: deviceHeight / 70,
    backgroundColor: Colors.lightGrey,
  },
  cashContainer: {
    padding: 20,
    paddingTop: 20,
  },
  title: {
    fontFamily: Bold,
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
    height: deviceHeight / 8,
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
    fontFamily: Bold,
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
  },
  debitCard: {
    height: deviceHeight / 5.5,
    width: '70%',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: Colors.success,
    backgroundColor: Colors.lightGrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
