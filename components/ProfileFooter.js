import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { deviceHeight } from '../constants/Dimensions';
import { ThemeContext } from '../contexts/ThemeContext';

const ProfileFooter = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <View
      style={{
        ...styles.ProfileFooterContainer,
        backgroundColor: isDarkMode ? Colors.dark : Colors.lightGrey,
      }}
    >
      <View style={styles.textContainer}>
        <Text style={styles.version}>Version 3.20.0 (288)</Text>

        <Text
          style={{
            ...styles.hashtag,
            color: isDarkMode ? Colors.light : 'black',
          }}
        >
          #pakeOVOaja
        </Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileFooter;

const styles = StyleSheet.create({
  ProfileFooterContainer: {
    height: deviceHeight / 3,
    width: '100%',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 5,
    marginBottom: 20,
  },
  version: {
    color: Colors.grey,
  },
  hashtag: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 13,
  },
  button: {
    backgroundColor: Colors.secondary,
    paddingVertical: 10,
    borderRadius: 20,
    marginHorizontal: 15,
  },
  textButton: {
    color: Colors.light,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
