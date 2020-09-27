import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import { deviceHeight } from '../constants/Dimensions';
import { ThemeContext } from '../contexts/ThemeContext';

const gradients = [
  Colors.grey,
  Colors.light,
  Colors.light,
  Colors.light,
  Colors.grey,
];

const firstRowData = [
  {
    iconName: 'thunder-cloud',
    iconColor: 'orange',
    text: 'PLN',
  },
  {
    iconName: 'credit',
    iconColor: '#0077b6',
    text: 'Pulsa',
  },
  {
    iconName: 'globe',
    iconColor: '#2a9d8f',
    text: 'Data',
  },
  {
    iconName: 'water',
    iconColor: '#4ea8de',
    text: 'PDAM',
  },
];

const secondRowData = [
  {
    iconName: 'shield',
    iconColor: '#06d6a0',
    text: 'BPJS',
  },
  {
    iconName: 'tv',
    iconColor: '#ee6c4d',
    text: 'TV',
  },
  {
    iconName: 'phone',
    iconColor: '#fcbf49',
    text: 'Telkom',
  },
  {
    iconName: 'list',
    iconColor: Colors.primary,
    text: 'Lainnya',
  },
];

const HomeService = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <View style={styles.serviceContainer}>
      {/* first row */}
      <View style={styles.serviceFirstRow}>
        {firstRowData.map((el, i) => (
          <TouchableOpacity style={styles.serviceItem} key={i}>
            <LinearGradient style={styles.serviceLogo} colors={gradients}>
              <Entypo name={el.iconName} size={24} color={el.iconColor} />
            </LinearGradient>
            <Text style={{ color: isDarkMode ? Colors.light : Colors.dark }}>
              {el.text}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* second row */}
      <View style={styles.serviceSecondRow}>
        {secondRowData.map((el, i) => (
          <TouchableOpacity style={styles.serviceItem} key={i}>
            <LinearGradient style={styles.serviceLogo} colors={gradients}>
              <Entypo name={el.iconName} size={24} color={el.iconColor} />
            </LinearGradient>
            <Text style={{ color: isDarkMode ? Colors.light : Colors.dark }}>
              {el.text}
            </Text>
          </TouchableOpacity>
        ))}
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
