import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Surface } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { deviceHeight, deviceWidth } from '../../constants/Dimensions';
import Colors from '../../constants/Colors';

const HomeTransfer = () => {
  const { navigate } = useNavigation();

  return (
    <Surface style={styles.transferContainer}>
      <TouchableOpacity
        style={styles.transferItem}
        onPress={() => navigate('TopUp')}
      >
        <MaterialCommunityIcons
          name="wallet-plus-outline"
          size={24}
          color={Colors.primary}
        />
        <Text style={styles.transferText}>Top Up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.transferItem}>
        <MaterialCommunityIcons
          name="bank-transfer"
          size={24}
          color={Colors.primary}
        />
        <Text style={styles.transferText}>Transfer</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.transferItem}>
        <MaterialCommunityIcons
          name="history"
          size={24}
          color={Colors.primary}
        />
        <Text style={styles.transferText}>History</Text>
      </TouchableOpacity>
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
    borderRadius: 10,
    elevation: 3,
  },
  transferItem: {
    alignItems: 'center',
  },
  transferText: {
    color: Colors.primary,
  },
});
