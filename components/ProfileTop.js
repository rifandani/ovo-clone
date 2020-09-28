import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Colors from '../constants/Colors';
import { deviceHeight } from '../constants/Dimensions';
import { ThemeContext } from '../contexts/ThemeContext';

const ProfileTop = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <View
      style={{
        ...styles.topContainer,
        backgroundColor: isDarkMode ? Colors.dark : 'white',
      }}
    >
      <Image
        style={styles.topImg}
        source={require('../assets/prof.png')}
        resizeMode="contain"
      />
      <View>
        <Text
          style={{
            ...styles.nama,
            color: isDarkMode ? Colors.light : 'black',
          }}
        >
          Tri Rizeki Rifandani
        </Text>
        <Text style={styles.hp}>0822-4319-9535</Text>
      </View>
    </View>
  );
};

export default ProfileTop;

const styles = StyleSheet.create({
  topContainer: {
    height: deviceHeight / 9,
    width: '100%',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: Colors.lightGrey,
    alignItems: 'center',
  },
  topImg: {
    height: 60,
    width: 40,
    borderRadius: 9999,
    marginHorizontal: 15,
  },
  nama: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  hp: {
    color: Colors.grey,
    fontSize: 12,
    letterSpacing: 1.3,
  },
});
