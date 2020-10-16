import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// files
import Colors from '../../constants/Colors';
import { deviceHeight } from '../../constants/Dimensions';
import { ThemeContext } from '../../contexts/ThemeContext';
// components
import ProfileListItem from './ProfileListItem';

const ProfileKeamanan = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <View
      style={{
        ...styles.ProfileKeamananContainer,
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
        Keamanan
      </Text>

      <ProfileListItem iconName="lock" text="Ubah Security Code" />
    </View>
  );
};

export default ProfileKeamanan;

const styles = StyleSheet.create({
  ProfileKeamananContainer: {
    height: deviceHeight / 5.5,
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
