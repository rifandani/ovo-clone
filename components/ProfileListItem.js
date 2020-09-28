import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import { deviceHeight } from '../constants/Dimensions';
import { ThemeContext } from '../contexts/ThemeContext';

const ProfileListItem = ({ iconName, text, showLihatDetail, divider }) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <View
      style={{
        ...styles.itemContainer,
        backgroundColor: isDarkMode ? Colors.dark : 'white',
        borderBottomColor: divider && Colors.lightGrey,
        borderBottomWidth: divider && 1,
      }}
    >
      <View style={styles.leftContainer}>
        <MaterialCommunityIcons
          style={styles.leftIcon}
          name={iconName}
          size={20}
          color={Colors.secondary}
        />

        <Text
          style={{
            ...styles.itemText,
            color: isDarkMode ? Colors.light : 'black',
          }}
        >
          {text}
        </Text>
      </View>

      <View style={styles.rightContainer}>
        {showLihatDetail && (
          <Text style={styles.lihatDetail}>Lihat Detail</Text>
        )}

        <MaterialCommunityIcons
          name="chevron-right"
          size={20}
          color={Colors.secondary}
        />
      </View>
    </View>
  );
};

export default ProfileListItem;

const styles = StyleSheet.create({
  itemContainer: {
    height: deviceHeight / 13,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIcon: {
    marginHorizontal: 15,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  lihatDetail: {
    color: Colors.grey,
    marginRight: 2,
  },
});
