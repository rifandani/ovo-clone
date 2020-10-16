import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import { ThemeContext } from '../../contexts/ThemeContext';
import { deviceHeight, deviceWidth } from '../../constants/Dimensions';

const DealsSearch = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <View
      style={{
        ...styles.searchContainer,
        backgroundColor: isDarkMode ? Colors.dark : 'white',
      }}
    >
      <TouchableOpacity style={styles.searchButton}>
        <Text style={styles.searchText}>Cari Merchants</Text>
      </TouchableOpacity>

      {/* icon */}
      <Entypo name="price-tag" size={24} color={Colors.success} />
    </View>
  );
};

export default DealsSearch;

const styles = StyleSheet.create({
  searchContainer: {
    height: deviceHeight / 12,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  searchButton: {
    backgroundColor: Colors.lightGrey,
    paddingHorizontal: deviceWidth / 4,
    paddingVertical: 8,
    borderRadius: 10,
  },
  searchText: {
    fontSize: 15,
    color: Colors.grey,
  },
});
