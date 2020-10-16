import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// files
import Colors from '../../constants/Colors';
import { deviceHeight } from '../../constants/Dimensions';

const DATA = [
  {
    key: '1',
    icon: 'credit-card-outline',
    text: 'Kartu Debit',
    iconColor: Colors.success,
  },
  {
    key: '2',
    icon: 'atm',
    text: 'ATM',
    iconColor: Colors.success,
  },
  {
    key: '3',
    icon: 'cellphone',
    text: 'Internet / Mobile banking',
    iconColor: Colors.success,
  },
  {
    key: '4',
    icon: 'bank',
    text: 'OVO Booth',
    iconColor: Colors.primary,
  },
  {
    key: '5',
    icon: 'motorbike',
    text: 'Grab',
    iconColor: Colors.green,
  },
  {
    key: '6',
    icon: 'shopping',
    text: 'Tokopedia',
    iconColor: Colors.lightGreen,
  },
];

const Item = ({ item, onPress, backgroundColor }) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor,
      }}
      onPress={onPress}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <MaterialCommunityIcons
          name={item.icon}
          size={40}
          color={item.iconColor}
        />

        <Text style={{ marginLeft: 7 }}>{item.text}</Text>
      </View>

      <MaterialCommunityIcons name="chevron-right" size={24} color="black" />
    </TouchableOpacity>
  );
};

const MetodeLain = () => {
  const [selectedKey, setSelectedKey] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.key === selectedKey ? Colors.pink : 'white';

    return (
      <Item
        item={item}
        onPress={() => setSelectedKey(item.key)}
        backgroundColor={backgroundColor}
      />
    );
  };

  return (
    <View style={styles.root}>
      {/* first row */}
      <View style={styles.firstRowContainer}>
        <View
          style={{
            borderBottomWKeyth: 1,
            borderBottomColor: Colors.grey,
            marginBottom: 20,
          }}
        >
          <Text style={{ color: Colors.grey }}>Top Up Saldo ke</Text>
          <Text style={{ fontSize: 15, fontWeight: '500' }}>OVO Cash</Text>
        </View>

        <View
          style={{
            borderRadius: 5,
            padding: 3,
            borderWidth: 2,
            borderColor: Colors.lightGrey,
            backgroundColor: Colors.superLightGrey,
            alignItems: 'center',
          }}
        >
          <Text style={{ color: Colors.grey }}>SALDO OVO CASH</Text>
          <Text style={{ fontSize: 15, fontWeight: '700' }}>Rp50.000</Text>
        </View>

        <Text style={{ textAlign: 'center', fontSize: 12, marginTop: 5 }}>
          Maks. Saldo OVO Cash Rp10.000.000
        </Text>
      </View>

      {/* top up method */}
      <View style={styles.secondRowContainer}>
        <Text
          style={{ color: Colors.grey, textAlign: 'center', marginBottom: 20 }}
        >
          Top up makin mudah dengan metode berikut:
        </Text>

        <View style={styles.listContainer}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            extraData={selectedKey}
          />
        </View>
      </View>
    </View>
  );
};

export default MetodeLain;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  firstRowContainer: {
    height: deviceHeight / 3.6,
    padding: 30,
  },
  secondRowContainer: {
    backgroundColor: Colors.superLightGrey,
    flex: 1,
    padding: 30,
    paddingTop: 15,
    paddingBottom: 0,
  },
  listContainer: {
    backgroundColor: Colors.superLightGrey,
    flex: 1,
  },
  button: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    marginBottom: 5,
    height: deviceHeight / 11,
  },
});
