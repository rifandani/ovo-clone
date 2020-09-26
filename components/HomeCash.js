import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { deviceHeight } from '../constants/Dimensions';
import Colors from '../constants/Colors';

const HomeCash = () => {
  return (
    <LinearGradient
      style={styles.linearGradient}
      colors={[Colors.primary, Colors.secondary, Colors.light]}
    >
      <Text style={styles.ovoCash}>OVO Cash</Text>

      <View style={styles.rpContainer}>
        <Text style={styles.rp}>Rp</Text>
        <Text style={styles.rpDigits}>146.018</Text>
      </View>

      <View style={styles.pointsContainer}>
        <Text style={styles.point}>OVO Points</Text>
        <Text style={styles.pointDigits}>3.495</Text>
      </View>
    </LinearGradient>
  );
};

export default HomeCash;

const styles = StyleSheet.create({
  linearGradient: {
    height: deviceHeight / 4.5,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingLeft: 15,
  },
  ovoCash: {
    color: Colors.light,
    fontWeight: '500',
  },
  rpContainer: {
    flexDirection: 'row',
    marginVertical: deviceHeight / 50,
  },
  rp: {
    color: Colors.light,
    fontWeight: 'bold',
    marginRight: 3,
  },
  rpDigits: {
    color: Colors.light,
    fontWeight: 'bold',
    fontSize: 22,
  },
  pointsContainer: {
    flexDirection: 'row',
  },
  point: {
    color: Colors.light,
    fontWeight: '500',
    marginRight: 3,
  },
  pointDigits: {
    color: 'orange',
    fontWeight: 'bold',
  },
});
