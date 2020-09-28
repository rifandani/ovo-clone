import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/Colors';
import { deviceHeight } from '../constants/Dimensions';
import { ThemeContext } from '../contexts/ThemeContext';
import ProfileListItem from './ProfileListItem';

const ProfileTentang = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <View
      style={{
        ...styles.ProfileTentangContainer,
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
        Tentang
      </Text>

      <ProfileListItem iconName="ribbon" text="Keuntungan Pakai OVO" divider />
      <ProfileListItem iconName="lightbulb" text="Panduan OVO" divider />
      <ProfileListItem
        iconName="wunderlist"
        text="Syarat dan Ketentuan"
        divider
      />
      <ProfileListItem
        iconName="shield-check"
        text="Kebijakan Privasi"
        divider
      />
      <ProfileListItem iconName="help-circle" text="Pusat Bantuan" />
    </View>
  );
};

export default ProfileTentang;

const styles = StyleSheet.create({
  ProfileTentangContainer: {
    height: deviceHeight / 2.05,
    width: '100%',
    paddingRight: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 15,
    marginTop: 20,
  },
});
