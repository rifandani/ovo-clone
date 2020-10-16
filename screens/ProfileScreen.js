import React, { useContext } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
// files
import { ThemeContext } from '../contexts/ThemeContext';
import { deviceHeight } from '../constants/Dimensions';
import Colors from '../constants/Colors';
import Header from '../components/Header';
// components
import ProfileTop from '../components/Profile/ProfileTop';
import ProfileListItem from '../components/Profile/ProfileListItem';
import ProfileLoyalty from '../components/Profile/ProfileLoyalty';
import ProfileAkun from '../components/Profile/ProfileAkun';
import ProfileKeamanan from '../components/Profile/ProfileKeamanan';
import ProfileTentang from '../components/Profile/ProfileTentang';
import ProfileFooter from '../components/Profile/ProfileFooter';

export default function ProfileScreen() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDarkMode ? Colors.dark : Colors.light,
      }}
    >
      <StatusBar style="light" />

      {/* header */}
      <Header title="Profile" />

      {/* content */}
      <View style={styles.content}>
        <ScrollView style={styles.scrollview}>
          {/* foto akun */}
          <ProfileTop />

          {/* ovo premier */}
          <ProfileListItem
            iconName="checkbox-multiple-marked-circle-outline"
            text="OVO Premier"
            showLihatDetail
          />

          {/* divider */}
          <View style={styles.divider}></View>

          {/* QR dan Loyalty */}
          <ProfileLoyalty />

          {/* divider */}
          <View style={styles.divider}></View>

          {/* akun */}
          <ProfileAkun />

          {/* divider */}
          <View style={styles.divider}></View>

          {/* keamanan */}
          <ProfileKeamanan />

          {/* divider */}
          <View style={styles.divider}></View>

          {/* tentang */}
          <ProfileTentang />

          {/* footer */}
          <ProfileFooter />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {},
  scrollView: {},
  divider: {
    height: deviceHeight / 80,
    width: '100%',
    backgroundColor: Colors.lightGrey,
  },
});
