import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
// files
import Header from '../../shared/components/Header';
import ProfileTop from '../components/ProfileTop';
import ProfileListItem from '../components/ProfileListItem';
import ProfileLoyalty from '../components/ProfileLoyalty';
import ProfileAkun from '../components/ProfileAkun';
import ProfileKeamanan from '../components/ProfileKeamanan';
import ProfileTentang from '../components/ProfileTentang';
import ProfileFooter from '../components/ProfileFooter';
import { ThemedView } from '../../shared/components/Themed';
import Colors from '../../shared/constants/Colors';
import Dimension from '../../shared/constants/Dimensions';
import { ThemeContext } from '../../shared/contexts/ThemeContext';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  contentContainer: {},
  scrollView: {},
  divider: {
    height: Dimension.deviceHeight / 80,
    backgroundColor: Colors.lightGrey,
    width: '100%',
  },
});

const ProfileScreen: React.FC = () => {
  // hooks
  const { isDarkMode } = React.useContext(ThemeContext);
  const backgroundColor = React.useMemo(
    () => (isDarkMode ? Colors.dark.background : Colors.light.background),
    [isDarkMode],
  );

  return (
    <ThemedView
      style={{
        ...styles.rootContainer,
        backgroundColor,
      }}>
      {/* header */}
      <Header backButton={false} title="Profile" />

      {/* content */}
      <ThemedView style={styles.contentContainer}>
        <ScrollView style={styles.scrollView}>
          {/* foto akun */}
          <ProfileTop />

          {/* ovo premier */}
          <ProfileListItem
            iconName="checkbox-multiple-marked-circle-outline"
            text="OVO Premier"
            showLihatDetail
          />

          {/* divider */}
          <ThemedView style={styles.divider} />

          {/* QR dan Loyalty */}
          <ProfileLoyalty />

          {/* divider */}
          <ThemedView style={styles.divider} />

          {/* akun */}
          <ProfileAkun />

          {/* divider */}
          <ThemedView style={styles.divider} />

          {/* keamanan */}
          <ProfileKeamanan />

          {/* divider */}
          <ThemedView style={styles.divider} />

          {/* tentang */}
          <ProfileTentang />

          {/* footer */}
          <ProfileFooter />
        </ScrollView>
      </ThemedView>
    </ThemedView>
  );
};

export default ProfileScreen;
