import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
// files
import { ThemedView } from '../../shared/components/Themed';
import MontserratText from '../../shared/components/MontserratText';
import Colors from '../../shared/constants/Colors';
import Dimension from '../../shared/constants/Dimensions';
import { ThemeContext } from '../../shared/contexts/ThemeContext';

const styles = StyleSheet.create({
  searchContainer: {
    height: Dimension.deviceHeight / 12,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  searchButton: {
    backgroundColor: Colors.lightGrey,
    paddingHorizontal: Dimension.deviceWidth / 4,
    paddingVertical: 8,
    borderRadius: 10,
  },
  searchText: {
    fontSize: 15,
    color: Colors.grey,
  },
});

const DealsSearch: React.FC = () => {
  const { isDarkMode } = React.useContext(ThemeContext);

  return (
    <ThemedView
      style={{
        ...styles.searchContainer,
        backgroundColor: isDarkMode ? Colors.light.text : Colors.dark.text,
      }}>
      <TouchableOpacity style={styles.searchButton}>
        <MontserratText style={styles.searchText}>
          Cari Merchants
        </MontserratText>
      </TouchableOpacity>

      {/* icon */}
      <Entypo name="price-tag" size={24} color={Colors.success} />
    </ThemedView>
  );
};

export default DealsSearch;
