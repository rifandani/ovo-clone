import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import Colors from '../constants/Colors';
import { Bold, Regular } from '../constants/Fonts';
import { deviceHeight } from '../constants/Dimensions';

const HomeCash = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/bgHome.png')}
        style={{ height: deviceHeight / 4.5, paddingLeft: 15, paddingTop: 8 }}
        imageStyle={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
        resizeMode="stretch"
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
      </ImageBackground>
    </View>
  );
};

export default HomeCash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: deviceHeight / 4.5,
  },
  ovoCash: {
    color: Colors.light,
    fontFamily: Regular,
  },
  rpContainer: {
    flexDirection: 'row',
    marginVertical: deviceHeight / 50,
  },
  rp: {
    color: Colors.light,
    fontFamily: Bold,
    marginRight: 3,
  },
  rpDigits: {
    color: Colors.light,
    fontFamily: Bold,
    fontSize: 22,
  },
  pointsContainer: {
    flexDirection: 'row',
  },
  point: {
    color: Colors.light,
    fontFamily: Regular,
    marginRight: 3,
  },
  pointDigits: {
    color: 'orange',
    fontFamily: Bold,
  },
});
