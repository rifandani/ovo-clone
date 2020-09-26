import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import { deviceHeight } from '../constants/Dimensions';
import { ThemeContext } from '../contexts/ThemeContext';

const HomeService = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const gradients = [
    Colors.grey,
    Colors.light,
    Colors.light,
    Colors.light,
    Colors.grey,
  ];

  return (
    <View style={styles.serviceContainer}>
      {/* first row */}
      <View style={styles.serviceFirstRow}>
        {/* pln */}
        <TouchableOpacity style={styles.serviceItem}>
          <LinearGradient style={styles.serviceLogo} colors={gradients}>
            <Entypo name="thunder-cloud" size={24} color="orange" />
          </LinearGradient>
          <Text style={{ color: isDarkMode ? Colors.light : Colors.dark }}>
            PLN
          </Text>
        </TouchableOpacity>
        {/* pulsa */}
        <TouchableOpacity style={styles.serviceItem}>
          <LinearGradient style={styles.serviceLogo} colors={gradients}>
            <Entypo name="credit" size={24} color="#0077b6" />
          </LinearGradient>
          <Text style={{ color: isDarkMode ? Colors.light : Colors.dark }}>
            Pulsa
          </Text>
        </TouchableOpacity>
        {/* paket data */}
        <TouchableOpacity style={styles.serviceItem}>
          <LinearGradient style={styles.serviceLogo} colors={gradients}>
            <Entypo name="globe" size={24} color="#2a9d8f" />
          </LinearGradient>
          <Text style={{ color: isDarkMode ? Colors.light : Colors.dark }}>
            Data
          </Text>
        </TouchableOpacity>
        {/* air pdam */}
        <TouchableOpacity style={styles.serviceItem}>
          <LinearGradient style={styles.serviceLogo} colors={gradients}>
            <Entypo name="water" size={24} color="#4ea8de" />
          </LinearGradient>
          <Text style={{ color: isDarkMode ? Colors.light : Colors.dark }}>
            PDAM
          </Text>
        </TouchableOpacity>
      </View>

      {/* second row */}
      <View style={styles.serviceSecondRow}>
        {/* bpjs */}
        <TouchableOpacity style={styles.serviceItem}>
          <LinearGradient style={styles.serviceLogo} colors={gradients}>
            <Entypo name="shield" size={24} color="#06d6a0" />
          </LinearGradient>
          <Text style={{ color: isDarkMode ? Colors.light : Colors.dark }}>
            BPJS
          </Text>
        </TouchableOpacity>
        {/* tv kabel */}
        <TouchableOpacity style={styles.serviceItem}>
          <LinearGradient style={styles.serviceLogo} colors={gradients}>
            <Entypo name="tv" size={24} color="#ee6c4d" />
          </LinearGradient>
          <Text style={{ color: isDarkMode ? Colors.light : Colors.dark }}>
            TV
          </Text>
        </TouchableOpacity>
        {/* telkom */}
        <TouchableOpacity style={styles.serviceItem}>
          <LinearGradient style={styles.serviceLogo} colors={gradients}>
            <Entypo name="phone" size={24} color="#fcbf49" />
          </LinearGradient>
          <Text style={{ color: isDarkMode ? Colors.light : Colors.dark }}>
            Telkom
          </Text>
        </TouchableOpacity>
        {/* lainnya */}
        <TouchableOpacity style={styles.serviceItem}>
          <LinearGradient style={styles.serviceLogo} colors={gradients}>
            <Entypo name="list" size={24} color={Colors.primary} />
          </LinearGradient>
          <Text style={{ color: isDarkMode ? Colors.light : Colors.dark }}>
            Lainnya
          </Text>
        </TouchableOpacity>
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
