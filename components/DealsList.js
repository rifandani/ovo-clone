import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import { deviceHeight, deviceWidth } from '../constants/Dimensions';
import { ThemeContext } from '../contexts/ThemeContext';

const firstListData = [
  {
    iconName: 'food',
    iconColor: Colors.warning,
    text: 'Foods',
  },
  {
    iconName: 'shopping',
    iconColor: Colors.success,
    text: 'Shopping',
  },
  {
    iconName: 'school',
    iconColor: Colors.info,
    text: 'School',
  },
  {
    iconName: 'gift',
    iconColor: Colors.danger,
    text: 'Gift',
  },
];

const secondListData = [
  {
    iconName: 'account-tie',
    iconColor: Colors.danger,
    text: 'Service',
  },
  {
    iconName: 'necklace',
    iconColor: Colors.info,
    text: 'Fashion',
  },
  {
    iconName: 'hospital-box',
    iconColor: Colors.success,
    text: 'Health',
  },
  {
    iconName: 'cards-playing-outline',
    iconColor: Colors.warning,
    text: 'Game',
  },
];

const DealsList = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <View
      style={{
        ...styles.nikmatContainer,
        backgroundColor: isDarkMode ? Colors.dark : 'white',
      }}
    >
      {/* Title */}
      <View style={styles.firstRow}>
        <Text
          style={{
            ...styles.title,
            color: isDarkMode ? Colors.light : Colors.dark,
          }}
        >
          Nikmat Dunia Lainnya
        </Text>
      </View>

      {/* subitle */}
      <Text
        style={{
          ...styles.subtitle,
          color: isDarkMode ? Colors.light : Colors.grey,
        }}
      >
        Silakan dilihat-lihat kakak
      </Text>

      {/* list */}
      <View style={styles.list}>
        {/* first row */}
        <View style={styles.firstList}>
          {firstListData.map((el, i) => (
            <View style={styles.item} key={i}>
              <MaterialCommunityIcons
                name={el.iconName}
                size={45}
                color={el.iconColor}
              />

              <Text
                style={{
                  ...styles.itemText,
                  color: isDarkMode ? Colors.light : 'black',
                }}
              >
                {el.text}
              </Text>
            </View>
          ))}
        </View>
        {/* second row */}
        <View style={styles.secondList}>
          {secondListData.map((el, i) => (
            <View style={styles.item} key={i}>
              <MaterialCommunityIcons
                name={el.iconName}
                size={45}
                color={el.iconColor}
              />

              <Text
                style={{
                  ...styles.itemText,
                  color: isDarkMode ? Colors.light : 'black',
                }}
              >
                {el.text}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default DealsList;

const styles = StyleSheet.create({
  nikmatContainer: {
    height: deviceHeight / 1.75,
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGrey,
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 12,
  },
  list: {
    height: deviceHeight / 3,
    width: '100%',
    marginTop: 10,
    paddingVertical: 20,
  },
  firstList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  secondList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  item: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 13,
  },
});
