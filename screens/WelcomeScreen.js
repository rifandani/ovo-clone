import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

import Colors from '../constants/Colors';
import { deviceHeight, deviceWidth } from '../constants/Dimensions';

export default function WelcomeScreen() {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.content}>
        <Image style={styles.image} source={require('../assets/homeImg.png')} />
        <Text style={styles.textTitle}>Organized in one place</Text>
        <Text style={styles.textBody}>
          Manage your personal finances in the easiest way
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('Transaksi')}
        >
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  content: {
    marginTop: deviceHeight / 10,
    alignItems: 'center',
  },
  image: {
    height: deviceHeight / 2,
    width: deviceWidth / 1,
  },
  textTitle: {
    color: Colors.primary,
    marginTop: deviceHeight / 40,
    fontSize: 26,
    fontWeight: 'bold',
  },
  textBody: {
    color: Colors.dark,
    marginTop: deviceHeight / 60,
    marginHorizontal: deviceWidth / 20,
    textAlign: 'center',
    fontSize: 18,
  },
  button: {
    backgroundColor: Colors.primary,
    marginTop: deviceHeight / 20,
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 50,
  },
  buttonText: {
    color: Colors.light,
    fontSize: 24,
  },
});
