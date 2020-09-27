import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Surface } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { deviceHeight, deviceWidth } from '../constants/Dimensions';
import Colors from '../constants/Colors';

const HomeTransfer = () => {
  return (
    <Surface style={styles.transferContainer}>
      <View style={styles.transferItem}>
        <MaterialCommunityIcons
          name="wallet-plus-outline"
          size={24}
          color={Colors.primary}
        />
        <Text style={styles.transferText}>Top Up</Text>
      </View>

      <View style={styles.transferItem}>
        <MaterialCommunityIcons
          name="bank-transfer"
          size={24}
          color={Colors.primary}
        />
        <Text style={styles.transferText}>Transfer</Text>
      </View>

      <View style={styles.transferItem}>
        <MaterialCommunityIcons
          name="history"
          size={24}
          color={Colors.primary}
        />
        <Text style={styles.transferText}>History</Text>
      </View>
    </Surface>
  );
};

export default HomeTransfer;

const styles = StyleSheet.create({
  transferContainer: {
    backgroundColor: 'white',
    paddingHorizontal: -(deviceWidth / 5),
    paddingVertical: deviceWidth / 27,
    marginTop: -(deviceHeight / 20),
    marginBottom: 20,
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderRadius: 5,
    elevation: 3,
  },
  transferItem: {
    alignItems: 'center',
  },
  transferText: {
    color: Colors.primary,
  },
});
