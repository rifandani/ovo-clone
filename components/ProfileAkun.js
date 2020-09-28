import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/Colors';
import { deviceHeight } from '../constants/Dimensions';
import { ThemeContext } from '../contexts/ThemeContext';
import ProfileListItem from './ProfileListItem';

const ProfileAkun = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <View
      style={{
        ...styles.ProfileAkunContainer,
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
        Akun
      </Text>

      <ProfileListItem iconName="account-edit" text="Ubah Profil" divider />
      <ProfileListItem iconName="credit-card-outline" text="My Cards" divider />
      <ProfileListItem iconName="ticket-percent" text="Kode Promo" />
    </View>
  );
};

export default ProfileAkun;

const styles = StyleSheet.create({
  ProfileAkunContainer: {
    height: deviceHeight / 3,
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
