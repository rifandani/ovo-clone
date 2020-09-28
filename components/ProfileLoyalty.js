import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import { deviceHeight } from '../constants/Dimensions';
import { ThemeContext } from '../contexts/ThemeContext';

const ProfileLoyalty = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <View
      style={{
        ...styles.profileLoyaltyContainer,
        backgroundColor: isDarkMode ? Colors.dark : 'white',
      }}
    >
      {/* title */}
      <Text
        style={{
          ...styles.title,
          color: isDarkMode ? Colors.light : 'black',
        }}
      >
        OVO ID
      </Text>

      {/* qr and loyalty */}
      <View style={styles.qrLoyalty}>
        {/* qr */}
        <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons
            name="qrcode"
            size={20}
            color={Colors.secondary}
          />

          <Text style={styles.itemText}>QR Code</Text>
        </TouchableOpacity>

        {/* loyalty */}
        <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons
            name="city-variant-outline"
            size={20}
            color={Colors.secondary}
          />

          <Text style={styles.itemText}>Loyalty</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileLoyalty;

const styles = StyleSheet.create({
  profileLoyaltyContainer: {
    height: deviceHeight / 4.7,
    width: '100%',
    padding: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 25,
  },
  qrLoyalty: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flexDirection: 'row',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    borderColor: Colors.lightGrey,
    backgroundColor: 'white',
  },
  itemText: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
