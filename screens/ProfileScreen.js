import React, { useContext } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
// files - components
import { ThemeContext } from '../contexts/ThemeContext';
import { deviceHeight } from '../constants/Dimensions';
import Colors from '../constants/Colors';
import Header from '../components/Header';
import ProfileTop from '../components/ProfileTop';
import ProfileListItem from '../components/ProfileListItem';
import ProfileLoyalty from '../components/ProfileLoyalty';
import ProfileAkun from '../components/ProfileAkun';
import ProfileKeamanan from '../components/ProfileKeamanan';
import ProfileTentang from '../components/ProfileTentang';
import ProfileFooter from '../components/ProfileFooter';

export default function ProfileScreen({ navigator }) {
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
