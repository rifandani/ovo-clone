import React from 'react';
import { StyleSheet } from 'react-native';
// files
import ProfileListItem from './ProfileListItem';
import { ThemedView } from '../../shared/components/Themed';
import MontserratText from '../../shared/components/MontserratText';
import Colors from '../../shared/constants/Colors';
import Dimension from '../../shared/constants/Dimensions';
import { ThemeContext } from '../../shared/contexts/ThemeContext';

const styles = StyleSheet.create({
  ProfileAkunContainer: {
    height: Dimension.deviceHeight / 3,
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

const ProfileAkun: React.FC = () => {
  // hooks
  const { isDarkMode } = React.useContext(ThemeContext);
  const backgroundColor = React.useMemo(
    () => (isDarkMode ? Colors.dark.background : Colors.light.background),
    [isDarkMode],
  );
  const color = React.useMemo(
    () => (isDarkMode ? Colors.dark.text : Colors.light.text),
    [isDarkMode],
  );

  return (
    <ThemedView
      style={{
        ...styles.ProfileAkunContainer,
        backgroundColor,
      }}>
      {/* title */}
      <MontserratText
        style={{
          ...styles.title,
          color,
        }}>
        Akun
      </MontserratText>

      <ProfileListItem iconName="account-edit" text="Ubah Profil" divider />
      <ProfileListItem iconName="credit-card-outline" text="My Cards" divider />
      <ProfileListItem iconName="ticket-percent" text="Kode Promo" />
    </ThemedView>
  );
};

export default ProfileAkun;
